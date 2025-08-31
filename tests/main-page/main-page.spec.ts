import allTracks200 from "./mocks/all-tracks-200";
import allPlaylists200 from "./mocks/all-playlists-200";
import { expect, test } from "./fixture";

test.describe("Пользователю показываются все треки и плейлисты", () => {
  test("На главной странице отображаются треки и плейлисты", async ({
    mockedPage: page
  }) => {
    await page.goto("/");
    await page.waitForSelector('[data-test-id="track-item"]', {
      timeout: 5000
    });

    await page.waitForSelector('[data-test-id="playlist-item"]', {
      timeout: 5000
    });

    await expect(page.getByTestId("[data-test-id='track-item']")).toHaveCount(
      allTracks200.length
    );

    for (let i = 0; i < allTracks200.length; i++) {
      const trackItem = page.getByTestId('[data-test-id="track-item"]').nth(i);

      await expect(
        trackItem.getByTestId('[data-test-id="track-name"]')
      ).toHaveText(allTracks200[i].name);

      await expect(
        trackItem.getByTestId('[data-test-id="track-icon"]')
      ).toBeVisible();

      await expect(
        trackItem.getByTestId('[data-test-id="track-author"]')
      ).toHaveText(allTracks200[i].author);

      await expect(
        trackItem.getByTestId('[data-test-id="track-album"]')
      ).toHaveText(allTracks200[i].album);

      await expect(
        trackItem.getByTestId('[data-test-id="track-duration"]')
      ).toBeVisible();
    }

    await expect(
      page.getByTestId("[data-test-id='playlist-item']")
    ).toHaveCount(allPlaylists200.length);

    for (let i = 0; i < allPlaylists200.length; i++) {
      const playlistItem = page
        .getByTestId('[data-test-id="playlist-item"]')
        .nth(i);

      await expect(
        playlistItem.getByTestId('[data-test-id="playlist-name"]')
      ).toHaveText(allPlaylists200[i].name);
    }
  });
});

test.describe("При клике на плейлист, пользователь преходит на страницу плейлиста", () => {
  test("Переход на страницу плейлиста", async ({ mockedPage: page }) => {
    await page.goto("/");
    await page.waitForSelector('[data-test-id="playlist-item"]', {
      timeout: 5000
    });

    const firstPlaylist = allPlaylists200[0];

    await page.getByTestId('[data-test-id="playlist-item"]').first().click();

    await expect(page).toHaveURL(
      new RegExp(
        `/playlists/${firstPlaylist._id}\\?name=${encodeURIComponent(firstPlaylist.name)}`
      )
    );

    await expect(
      page.getByTestId('[data-test-id="playlist-title"]').first()
    ).toHaveText(firstPlaylist.name);
  });
});
