import { test, expect } from "../fixtures/base";
import { positiveUser } from "../data/users";

test.describe("Login on website", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test("Test E2E", async ({
    page,
    cartPage,
    finishPage,
    checkoutPage,
    loginFlow,
    mainPage,
  }) => {
    //await loginPage.loginToStore(positiveUser.username, positiveUser.password);

    await loginFlow.loginAs(positiveUser);

    //verification sign in
    await expect(page).toHaveURL(/.*inventory.html/);

    //New indication of what to do await
    await mainPage.addItemToCart("Bike Light");
    await mainPage.goToCart();

    //check update number product in cart via MainPage file
    //await expect(mainPage.cartNumber).toHaveText("1");

    await cartPage.CartToStore();
    //user data
    await checkoutPage.proceedToCheckout("Jan", "Kowalski", "37-550");

    //check finish shopping
    await finishPage.FinishShopping();

    //check the shopping completion message
    await expect(finishPage.successText).toHaveText(
      "Thank you for your order!",
    );
  });
});
