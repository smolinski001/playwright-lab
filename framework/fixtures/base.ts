import { test as base } from "@playwright/test";

//POM
import { CartPage } from "@pages/CartPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import { FinishPage } from "@pages/FinishPage";
import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";

//fixtures
import { LoginFlow } from "@flows/LoginFlow";

type MyFixtures = {
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  finishPage: FinishPage;
  loginPage: LoginPage;
  mainPage: MainPage;
  loginFlow: LoginFlow;
};

export const test = base.extend<MyFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  finishPage: async ({ page }, use) => {
    const finishPage = new FinishPage(page);
    await use(finishPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },

  loginFlow: async ({ loginPage }, use) => {
    const loginFlow = new LoginFlow(loginPage);
    await use(loginFlow);
  },
});

export { expect } from "@playwright/test";
