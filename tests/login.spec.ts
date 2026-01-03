import { test, expect } from "@playwright/test";

//Add LoginPage import
import { LoginPage } from "./pages/LoginPage";

//Add MainPage import
import { MainPage } from "./pages/MainPage";

test.describe("Login on website", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Test E2E", async ({ page }) => {
    //Redirecting a variable to the LoginPage
    const loginPage = new LoginPage(page);

    //Redirecting a variable to the MainPage
    const mainPage = new MainPage(page);

    const cartNumber = page.locator('[data-test="shopping-cart-badge"]');

    const cartLink = page.locator('[data-test="shopping-cart-link"]');

    const inCart = page.locator('[data-test="item-4-title-link"]');

    const btnCheckout = page.locator('[data-test="checkout"]');

    const firstName = page.locator('[data-test="firstName"]');
    const lastName = page.locator('[data-test="lastName"]');
    const postalCode = page.locator('[data-test="postalCode"]');

    const btnContinue = page.locator('[data-test="continue"]');
    const btnFinish = page.locator('[data-test="finish"]');

    const txtTitle = page.locator(".title");
    const successText = page.locator('[data-test="complete-header"]');

    //Sign in
    //New indication of what to do await
    //Podanie danych do
    await loginPage.loginToStore("standard_user", "secret_sauce");

    //verification sign in
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(txtTitle).toHaveText("Products");

    //New indication of what to do await
    await mainPage.addBackpack();

    //check update number product in cart
    await expect(cartNumber).toHaveText("1");

    //go to cart
    await cartLink.click();
    await expect(inCart).toHaveText("Sauce Labs Backpack");

    await btnCheckout.click();

    //user data
    await firstName.fill("Jan");
    await lastName.fill("Kowalski");
    await postalCode.fill("37-550");

    //Continue process
    await btnContinue.click();
    await btnFinish.click();

    //check the shopping completion message
    await expect(successText).toHaveText("Thank you for your order!");
  });
});
