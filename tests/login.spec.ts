import { test, expect } from "@playwright/test";

//Add LoginPage import
import { LoginPage } from "./pages/LoginPage";

//Add MainPage import
import { MainPage } from "./pages/MainPage";

//Add Cart import
import { CartPage } from "./pages/CartPage";

//Add Checkout import
import { CheckoutPage } from "./pages/CheckoutPage";
import { FinishPage } from "./pages/FinishPage";

test.describe("Login on website", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Test E2E", async ({ page }) => {
    //Redirecting a variable to the LoginPage
    const loginPage = new LoginPage(page);
    //Redirecting a variable to the MainPage
    const mainPage = new MainPage(page);
    //Redirecting a variable to the CartPage
    const cartPage = new CartPage(page);
    //Redirecting a variable to the CheckoutPage
    const checkoutPage = new CheckoutPage(page);
    //Redirecting a variable to the FinishPage
    const finishPage = new FinishPage(page);

    //Sign in
    await loginPage.loginToStore("standard_user", "secret_sauce");

    //verification sign in
    await expect(page).toHaveURL(/.*inventory.html/);

    //New indication of what to do await
    await mainPage.addBackpack();
    await mainPage.goToCart();

    //check update number product in cart via MainPage file
    await expect(mainPage.cartNumber).toHaveText("1");

    await cartPage.CartToStore();
    //user data
    await checkoutPage.proceedToCheckout("Jan", "Kowalski", "37-550");

    //check finish shopping
    await finishPage.FinishShopping();

    //check the shopping completion message
    await expect(finishPage.successText).toHaveText(
      "Thank you for your order!"
    );
  });
});
