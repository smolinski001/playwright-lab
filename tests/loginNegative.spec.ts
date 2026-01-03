import { test, expect } from "@playwright/test";

//Add LoginPage import
import { LoginPage } from "./pages/LoginPage";

test.describe("Login on website", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Test negative", async ({ page }) => {
    //Redirecting a variable to the LoginPage
    const loginPage = new LoginPage(page);

    await loginPage.loginToStore("locked_out_user", "secret_sauce");

    //taking locator from LoginPage
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
