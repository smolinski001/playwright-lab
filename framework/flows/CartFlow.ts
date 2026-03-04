import { MainPage } from "@pages/MainPage";
import { CartPage } from "@pages/CartPage";

export class CartFlow {
  constructor(
    private mainPage: MainPage,
    private cartPage: CartPage,
  ) {}

  async addProduct(productName: string) {
    await this.mainPage.addItemToCart(productName);
  }

  async goToCart() {}
}
