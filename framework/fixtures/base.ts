import { test as base } from "@playwright/test";

//POM
import { CartPage } from "@pages/CartPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import { FinishPage } from "@pages/FinishPage";
import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";
import { CompletePage } from "@pages/CompletePage";

//fixtures
import { LoginFlow } from "@flows/LoginFlow";
import { CartFlow } from "@flows/CartFlow";
import { positiveUser } from "@data/users";

type MyFixtures = {
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  completePage: CompletePage;
  finishPage: FinishPage;
  loginPage: LoginPage;
  mainPage: MainPage;
  loginFlow: LoginFlow;
  cartFlow: CartFlow;
  loggedInPage: MainPage;
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
  completePage: async ({ page }, use) => {
    const completePage = new CompletePage(page);
    await use(completePage);
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

  cartFlow: async ({ mainPage }, use) => {
    const cartFlow = new CartFlow(mainPage);
    await use(cartFlow);
  },

  loggedInPage: async ({ loginFlow, mainPage }, use) => {
    await loginFlow.loginAs(positiveUser);
    await use(mainPage);
  },
});

export { expect } from "@playwright/test";
