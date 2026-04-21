import { test, expect } from "@fixtures/base";

test("should display inventory page after login", async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

test("should display correct number of products", async ({ pages }) => {
  await expect(pages.mainPage.classProduct).toHaveCount(0);
});

test("should add product to cart", async ({ loggedInPage, pages }) => {
  await pages.mainPage.addItemToCart("Sauce Labs Backpack");
  await expect(pages.mainPage.cartNumber).toHaveText("1");
});
