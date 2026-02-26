import { LoginPage } from "@pages/LoginPage";
import { TestUser } from "@data/users";

export class LoginFlow {
  constructor(private loginPage: LoginPage) {}

  async loginAs(user: TestUser) {
    await this.loginPage.goto();
    await this.loginPage.loginToStore(user.username, user.password);
  }
}
