import { test as base, Page } from "@playwright/test";
import allTracks200 from "./mocks/all-tracks-200";
import allPlaylists200 from "./mocks/all-playlists-200";
import currentUser200 from "../mocks/current-user-200";

type TestFixtures = {
  mockedPage: Page;
};

export const test = base.extend<TestFixtures>({
  mockedPage: async ({ page }, use) => {
    await page.route(`${process.env.VITE_API_URL}/users/me`, async (route) => {
      await route.fulfill({ status: 200, json: currentUser200 });
    });

    await page.route(`${process.env.VITE_API_URL}/tracks`, async (route) => {
      await route.fulfill({ status: 200, json: allTracks200 });
    });

    await page.route(`${process.env.VITE_API_URL}/playlists`, async (route) => {
      await route.fulfill({ status: 200, json: allPlaylists200 });
    });

    await use(page);
  }
});

export { expect } from "@playwright/test";
