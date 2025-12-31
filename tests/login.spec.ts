import { test, expect } from "@playwright/test";

test.describe("Logowanie się na strone", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Pełny proces", async ({ page }) => {
    const userName = page.locator('[data-test="username"]');
    const userPassword = page.locator('[data-test="password"]');
    const btnLogin = page.locator('[data-test="login-button"]');

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

    //Logowanie się
    await userName.fill("standard_user");
    await userPassword.fill("secret_sauce");
    await btnLogin.click();

    //weryfikacja zalogowania się
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(txtTitle).toHaveText("Products");

    await btnAddCart.click();

    //sprawdzenie czy zaktualizowała sie liczba produktów w koszyku
    await expect(cartNumber).toHaveText("1");

    //przejscie do koszyka
    await cartLink.click();
    await expect(inCart).toHaveText("Sauce Labs Backpack");

    await btnCheckout.click();

    //Dane usera
    await firstName.fill("Jan");
    await lastName.fill("Kowalski");
    await postalCode.fill("37-550");

    //przejście dalej w procesie
    await btnContinue.click();
    await btnFinish.click();

    //Sprawdzenie czy wystepuje komunikat kończący
    await expect(successText).toHaveText("Thank you for your order!");
  });

  test("Test negatywnego usera", async ({ page }) => {
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
