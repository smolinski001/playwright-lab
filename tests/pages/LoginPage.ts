import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  //Nakierowanie ze będzie taka zmienna
  readonly userName: Locator;
  readonly userPassword: Locator;
  readonly btnLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    //wypełnienie zmiennej
    this.userName = page.locator('[data-test="username"]');
    this.userPassword = page.locator('[data-test="password"]');
    this.btnLogin = page.locator('[data-test="login-button"]');
  }

  //sposób uzycia zmiennej
  async loginToStore() {
    await this.userName.fill("standard_user");
    await this.userPassword.fill("secret_sauce");
    await this.btnLogin.click();
  }
}
