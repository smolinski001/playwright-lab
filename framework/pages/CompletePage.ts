import { type Locator, type Page } from "@playwright/test";

export class CompletePage {
  readonly page: Page;

  readonly btnBackHome: Locator;
  readonly successText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnBackHome = page.locator('[data-test="back-to-products"]');
    this.successText = page.locator('[data-test="complete-header"]');
  }

  async backHomePage() {
    await this.btnBackHome.click();
  }
}
