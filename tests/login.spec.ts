import { test, expect } from "@playwright/test";

//Add LoginPage import
import { LoginPage } from "./pages/LoginPage";

test.describe("Login on website", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Test E2E", async ({ page }) => {
    //Redirecting a variable to the LoginPage
    const loginPage = new LoginPage(page);

    const btnAddCart = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

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
    await loginPage.loginToStore();

    //verification sign in
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(txtTitle).toHaveText("Products");

    await btnAddCart.click();

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

  //TODO
  test("Test negative", async ({ page }) => {
    const userName = page.locator('[data-test="username"]');
    const userPassword = page.locator('[data-test="password"]');
    const btnLogin = page.locator('[data-test="login-button"]');
    const negativeText = page.locator('[data-test="error"]');

    await userName.fill("locked_out_user");
    await userPassword.fill("secret_sauce");
    await btnLogin.click();

    await expect(negativeText).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
