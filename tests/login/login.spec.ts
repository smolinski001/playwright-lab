import { test, expect } from "@fixtures/base";
import { positiveUser, negativeUser } from "@data/users";

test("Test positive user", async ({ loginFlow, page }) => {
  await loginFlow.loginAs(positiveUser);

  await expect(page).toHaveURL(/.*inventory.html/);
});

test("Test negative user", async ({ loginFlow, loginPage }) => {
  await loginFlow.loginAs(negativeUser);

  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

test("Test random user", async ({ loginPage }) => {
  await loginPage.loginToStore("qwefsgrdf", "qwfesgrfd");

  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

/*
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
  await checkoutPage.proceedToCheckout(
    checkoutInformation.firstName,
    checkoutInformation.lastName,
    checkoutInformation.postalCode,
  );

  //check finish shopping
  await finishPage.finishShopping();

  //check the shopping completion message
  await expect(finishPage.successText).toHaveText("Thank you for your order!");
});
*/
