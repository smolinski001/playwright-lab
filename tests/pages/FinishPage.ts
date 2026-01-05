import { type Locator, type Page } from "@playwright/test";

export class FinishPage {
  readonly page: Page;

  readonly btnFinish: Locator;
  readonly successText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnFinish = page.locator('[data-test="finish"]');
    this.successText = page.locator('[data-test="complete-header"]');
  }

  async FinishShopping() {
    await this.btnFinish.click();
  }
}
