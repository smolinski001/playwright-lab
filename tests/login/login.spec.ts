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
  await loginPage.goto();
  await loginPage.loginToStore("qwefsgrdf", "qwfesgrfd");

  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
