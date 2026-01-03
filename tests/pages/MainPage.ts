import { type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;

  readonly btnAddCart: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.btnAddCart = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addBackpack() {
    await this.btnAddCart.click();
    await this.cartLink.click();
  }
}
