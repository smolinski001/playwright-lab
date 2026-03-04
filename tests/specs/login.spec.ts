import { test, expect } from "@fixtures/base";
import { positiveUser } from "@data/users";

test("Test E2E", async ({
  page,
  cartPage,
  finishPage,
  checkoutPage,
  loginFlow,
  mainPage,
}) => {
  await loginFlow.loginAs(positiveUser);

  //verification sign in
  await expect(page).toHaveURL(/.*inventory.html/);

  //New indication of what to do await
  await mainPage.addItemToCart("Bike Light");
  await mainPage.goToCart();

  await cartPage.cartToStore();
  //user data
  await checkoutPage.proceedToCheckout("Jan", "Kowalski", "37-550");

  //check finish shopping
  await finishPage.finishShopping();

  //check the shopping completion message
  await expect(finishPage.successText).toHaveText("Thank you for your order!");
});
