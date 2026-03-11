import { type Locator, type Page } from "@playwright/test";

export class FinishPage {
  readonly page: Page;

  readonly btnFinish: Locator;
  readonly btnCancel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnFinish = page.locator('[data-test="finish"]');
    this.btnCancel = page.locator('[data-test="cancel"]');
  }

  async finishShopping() {
    await this.btnFinish.click();
  }

  async cancelShopping() {
    await this.btnCancel.click();
  }
}
