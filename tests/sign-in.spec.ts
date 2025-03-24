import { expect, test } from "@playwright/test";

test.describe("Sign in", () => {
  test.describe("User i authorized", () => {
    test("успешный вход", async ({ page }) => {
      await page.goto("http://localhost:3000/sign-in");
      await page.getByPlaceholder("Логин").fill("test@test.com");
      await page.getByPlaceholder("Пароль").fill("test");
      await page.getByRole("button", { name: "Войти" }).click();
      await expect(page).toHaveURL("http://localhost:3000/");
    });
  });

  //   test("ошибка входа при неверных данных", async ({ page }) => {
  //     await page.route(`${process.env.VITE_API_URL}/sign-in`, async (route) => {
  //       route.fulfill({
  //         status: 400,
  //         contentType: "application/json",
  //         body: JSON.stringify({
  //           message: "Неверный логин или пароль"
  //         })
  //       });
  //     });

  //     await page.goto("/sign-in");
  //     await page.getByPlaceholder("Логин").fill("invalid@test.com");
  //     await page.getByPlaceholder("Пароль").fill("wrongpassword");
  //     await page.getByRole("button", { name: "Войти" }).click();

  //     await expect(page.getByText("Неверный логин или пароль")).toBeVisible();
  //   });
});
