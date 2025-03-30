// import { expect, test } from "@playwright/test";
// import currentUser200 from "./mocks/current-user-200";

// test.describe("Sign Up", () => {
//   test.describe("Не зарегистрированный пользователь", () => {
//     test.beforeEach(async ({ page }) => {
//       await page.goto("/sign-up");
//     });
//     test("Открытие sign up страницы", async ({ page }) => {
//       await expect(
//         page.getByRole("button", { name: "Зарегистрироваться" })
//       ).toBeVisible();
//     });

//     test("Пользователь с таким email уже существует", async ({ page }) => {
//       await page.route(
//         `${process.env.VITE_API_URL}/auth/register`,
//         async (route) => {
//           const json = {
//             statusCode: 400,
//             message: "User already exists",
//             code: "USER_EXISTS"
//           };
//           await route.fulfill({ status: 400, json });
//         }
//       );

//       await page.getByPlaceholder("Логин").fill("test@test.com");
//       await page.locator('input[name="password"]').fill("test");
//       await page.locator('input[name="confirmPassword"]').fill("test");
//       await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//       await expect(
//         page.getByText("Такой пользователь уже существует")
//       ).toBeVisible();
//     });

//     test("Реквест при регистрации упал с ошибкой 500", async ({ page }) => {
//       await page.route(
//         `${process.env.VITE_API_URL}/auth/register`,
//         async (route) => {
//           const json = {
//             statusCode: 500,
//             message: "Something went wrong",
//             code: "INTERNAL_ERROR"
//           };
//           await route.fulfill({ status: 500, json });
//         }
//       );

//       await page.getByPlaceholder("Логин").fill("test@test.com");
//       await page.locator('input[name="password"]').fill("test");
//       await page.locator('input[name="confirmPassword"]').fill("test");
//       await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//       await expect(page.getByText("Ошибка попробуйте еще раз")).toBeVisible();
//     });

//     test("Пользователь ввел валидные данные и его должно перекинуть на страницу sign in", async ({
//       page
//     }) => {
//       await page.route(
//         `${process.env.VITE_API_URL}/auth/register`,
//         async (route) => {
//           await route.fulfill({ status: 201 });
//         }
//       );

//       await page.getByPlaceholder("Логин").fill("test@test.com");
//       await page.locator('input[name="password"]').fill("test");
//       await page.locator('input[name="confirmPassword"]').fill("test");

//       await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//       await expect(page).toHaveURL("/sign-in");

    
//     });

//     test.describe("Валидация формы", () => {
//       test("Если пользователь не заполнил поле Логин", async ({ page }) => {
//         await page.locator('input[name="password"]').fill("1234");

//         await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//         await expect(page.getByText("Email обязательное поле")).toBeVisible();
//       });

//       test("Если пользователь не заполнил поле Пароль", async ({ page }) => {
//         await page.getByPlaceholder("Логин").fill("test@test.ru");

//         await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//         await expect(
//           page.getByText("Минимальная длина пароля 4 символа")
//         ).toBeVisible();
//       });

//       test("Если поле Логин пустое, необходимо показывать ошибку", async ({
//         page
//       }) => {
//         await page.locator('input[name="password"]').fill("test");
//         await page.locator('input[name="confirmPassword"]').fill("test");

//         await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//         await expect(page.getByText("Email обязательное поле")).toBeVisible();
//       });

//       test("Если поле - Пароль пустое", async ({ page }) => {
//         await page.getByPlaceholder("Логин").fill("test@mail.ru");

//         await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//         await expect(
//           page.getByText("Минимальная длина пароля 4 символа")
//         ).toBeVisible();
//       });

//       test("Если поля: Пароль и Повторите пароль не совпадают", async ({
//         page
//       }) => {
//         await page.getByPlaceholder("Логин").fill("test@mail.ru");
//         await page.locator('input[name="password"]').fill("test");
//         await page.locator('input[name="confirmPassword"]').fill("test222");

//         await page.getByRole("button", { name: "Зарегистрироваться" }).click();

//         await expect(page.getByText("Пароли должны совпадать")).toBeVisible();
//       });
//     });

//     //     test.beforeEach(async ({ page }) => {
//     //       await page.route(
//     //         `${process.env.VITE_API_URL}/users/me`,
//     //         async (route) => {
//     //           await route.fulfill({
//     //             status: 200,
//     //             json: currentUser200
//     //           });
//     //         }
//     //       );
//     //     });

//     //     test("Авторизованный пользователь вызывает страницу sign-in", async ({
//     //       page
//     //     }) => {
//     //       await page.goto(`/sign-in`);

//     //       await expect(page).toHaveURL("/");
//     //     });
//     //   });
//   });

//   test.describe("Авторизованный пользователь", () => {
//     test.beforeEach(async ({ page }) => {
//       await page.route(
//         `${process.env.VITE_API_URL}/users/me`,
//         async (route) => {
//           await route.fulfill({
//             status: 200,
//             json: currentUser200
//           });
//         }
//       );
//     });

//     test("Пользователь переходит на страницу регистрации, его должно перенаправить на главную", async ({
//       page
//     }) => {
//       await page.goto("/sign-up");

//       await expect(page).toHaveURL("/");
//     });
//   });
// });
