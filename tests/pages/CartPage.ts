import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly btnCheckout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnCheckout = page.locator('[data-test="checkout"]');
  }

  async CartToStore() {
    await this.btnCheckout.click();
  }
}
