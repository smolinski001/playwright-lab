import { test, expect } from "@playwright/test";

test.describe("Logowanie się na strone", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Pełny proces", async ({ page }) => {
    //Logowanie się
    const userName = page.locator('[data-test="username"]');
    const userPassword = page.locator('[data-test="password"]');
    const btnLogin = page.locator('[data-test="login-button-NIE-ISTNIEJE"]');
    const btnAddCart = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    const cartLink = page.locator('[data-test="shopping-cart-link"]');
    const btnCheckout = page.locator('[data-test="checkout"]');

    const firstName = page.locator('[data-test="firstName"]');
    const lastName = page.locator('[data-test="lastName"]');
    const postalCode = page.locator('[data-test="postalCode"]');

    const btnContinue = page.locator('[data-test="continue"]');
    const btnFinish = page.locator('[data-test="finish"]');

    const txtTitle = page.locator(".title");
    const successText = page.locator('[data-test="complete-header"]');

    await userName.fill("standard_user");
    await userPassword.fill("secret_sauce");
    await btnLogin.click();

    // 5. ASERCJA (Sprawdzenie)
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(txtTitle).toHaveText("Products");

    await btnAddCart.click();
    await cartLink.click();
    await btnCheckout.click();

    //Dane usera

    await firstName.fill("Jan");
    await lastName.fill("Kowalski");
    await postalCode.fill("37-550");

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
