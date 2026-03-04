import { test, expect } from "@fixtures/base";
import { negativeUser } from "@data/users";

test("Test negative", async ({ page, loginFlow, loginPage }) => {
  await loginFlow.loginAs(negativeUser);

  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});
