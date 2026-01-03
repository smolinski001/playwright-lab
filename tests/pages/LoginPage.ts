import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  //Direction that there will be such a variable
  readonly userName: Locator;
  readonly userPassword: Locator;
  readonly btnLogin: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    //filling the variable
    this.userName = page.locator('[data-test="username"]');
    this.userPassword = page.locator('[data-test="password"]');
    this.btnLogin = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  //use a variable
  //not providing hardcoded login strings
  async loginToStore(userName: string, userPassword: string) {
    await this.userName.fill(userName);
    await this.userPassword.fill(userPassword);
    await this.btnLogin.click();
  }
}
