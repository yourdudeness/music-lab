import { expect, test } from "@playwright/test";

import allTracks200 from "./mocks/all-tracks-200";
import allPlaylists200 from "./mocks/all-playlists-200";
import currentUser200 from "../mocks/current-user-200";

test.describe("Пользователю показываются все треки и плейлисты", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(`${process.env.VITE_API_URL}/users/me`, async (route) => {
      await route.fulfill({
        status: 200,
        json: currentUser200
      });
    });
  });

  test.beforeEach(async ({ page }) => {
    await page.route(`${process.env.VITE_API_URL}/tracks`, async (route) => {
      await route.fulfill({
        status: 200,
        json: allTracks200
      });
    });
  });

  test.beforeEach(async ({ page }) => {
    await page.route(`${process.env.VITE_API_URL}/playlists`, async (route) => {
      await route.fulfill({
        status: 200,
        json: allPlaylists200
      });
    });
  });

  test("На главной странице отображаются треки и плейлисты", async ({
    page
  }) => {
    await page.goto("/");
    await page.waitForSelector('[data-test-id="track-item"]', {
      timeout: 5000
    });

    await expect(page.locator("[data-test-id='track-item']")).toHaveCount(
      allTracks200.length
    );

    const firstTrack = page.locator('[data-test-id="track-item"]').first();

    await expect(
      firstTrack.locator('[data-test-id="track-icon"]')
    ).toBeVisible();

    await expect(firstTrack.locator('[data-test-id="track-name"]')).toHaveText(
      allTracks200[0].name
    );

    await expect(
      firstTrack.locator('[data-test-id="track-author"]')
    ).toHaveText(allTracks200[0].author);

    await expect(firstTrack.locator('[data-test-id="track-album"]')).toHaveText(
      allTracks200[0].album
    );

    await expect(
      firstTrack.locator('[data-test-id="track-duration"]')
    ).toHaveText("2:21");
  });
});
