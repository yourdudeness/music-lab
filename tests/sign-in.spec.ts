import { expect, test } from "@playwright/test";
import currentUser200 from "./mocks/current-user-200";

test.describe("Sign in", () => {
  test.describe("Не авторизованный пользователь", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/sign-in");
    });
    test("Открытие sign in страницы", async ({ page }) => {
      await expect(page.getByRole("button", { name: "Войти" })).toBeVisible();
    });

    test("Переход на страницу регистрации", async ({ page }) => {
      await page.getByRole("button", { name: "Зарегистрироваться" }).click();

      await expect(page).toHaveURL("/sign-up");
    });

    test("Успешный вход", async ({ page }) => {
      await page.route(
        `${process.env.VITE_API_URL}/auth/login`,
        async (route) => {
          await route.fulfill({
            status: 200,
            json: {
              accessToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDM1NjE1NGVlMzc5MjQ4ZmNlOTE3MSIsImlhdCI6MTc0Mjg1NjAyMiwiZXhwIjoxNzQyODU5NjIyfQ.g6l_M8jsFftif-1vs622M2fbBLgnFSg2wDAqKWwoyXw",
              refreshToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDM1NjE1NGVlMzc5MjQ4ZmNlOTE3MSIsImlhdCI6MTc0Mjg1NjAyMiwiZXhwIjoxNzQzNDYwODIyfQ.FtnfAYfof6gWLR37lCQtT3XhIBGO_Gww-Boo5fRApxA"
            }
          });
        }
      );

      await page.getByPlaceholder("Логин").fill("test@test.com");
      await page.getByPlaceholder("Пароль").fill("test");
      await page.getByRole("button", { name: "Войти" }).click();
      await page.route(
        //если вызывать перед тем как кликнуть на кнопку, будет баг с заполнением поля
        `${process.env.VITE_API_URL}/users/me`,
        async (route) => {
          await route.fulfill({
            status: 200,
            json: currentUser200
          });
        }
      );

      await expect(page).toHaveURL("/");
    });

    test("Несуществующий аккаунт", async ({ page }) => {
      await page.route(
        `${process.env.VITE_API_URL}/api/auth/login`,
        async (route) => {
          await route.fulfill({
            status: 400,
            json: {
              message: "Invalid email or password",
              errorCode: "INVALID_CREDENTIALS"
            }
          });
        }
      );

      await page.getByPlaceholder("Логин").fill("test@mail.ru");
      await page.getByPlaceholder("Пароль").fill("1234");
      await page.getByRole("button", { name: "Войти" }).click();

      await expect(page.getByText("Неверный логин или пароль")).toBeVisible({
        timeout: 10000
      });
    });

    test.describe("Валидация формы", () => {
      test("Если пользователь не заполнил поле Логин", async ({ page }) => {
        await page.getByPlaceholder("Пароль").fill("1234");
        await page.getByRole("button", { name: "Войти" }).click();

        await expect(page.getByText("Email обязательное поле")).toBeVisible();
      });

      test("Если пользователь не заполнил поле Пароль", async ({ page }) => {
        await page.getByPlaceholder("Логин").fill("test@test.ru");
        await page.getByRole("button", { name: "Войти" }).click();

        await expect(
          page.getByText("Минимальная длина пароля 4 символа")
        ).toBeVisible();
      });
    });
  });

  test.describe("Авторизованный пользователь", () => {
    test.beforeEach(async ({ page }) => {
      await page.route(
        `${process.env.VITE_API_URL}/users/me`,
        async (route) => {
          await route.fulfill({
            status: 200,
            json: currentUser200
          });
        }
      );
    });

    test("Авторизованный пользователь вызывает страницу sign-in", async ({
      page
    }) => {
      await page.goto(`/sign-in`);

      await expect(page).toHaveURL("/");
    });
  });
});
