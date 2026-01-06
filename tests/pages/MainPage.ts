import { type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;

  readonly btnAddCart: Locator;
  readonly cartLink: Locator;
  readonly cartNumber: Locator;
  readonly classProduct: Locator;

  //stałe elementy które nie ulegają zmianie na danej stronie
  constructor(page: Page) {
    this.page = page;

    this.btnAddCart = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartNumber = page.locator('[data-test="shopping-cart-badge"]');
    this.classProduct = page.locator(".inventory_item");
  }

  async addBackpack() {
    await this.btnAddCart.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  //Chaining methods
  //dynamiczna metoda która posiada lokatory które mogą się zmieniać
  async addItemToCart(productName: string) {
    this.classProduct
      .filter({ hasText: productName })
      .locator("button")
      .click();
  }
}
