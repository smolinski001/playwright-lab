import { test, expect } from "@fixtures/base";

test("should display inventory page after login", async ({
  page,
  loggedInPage,
}) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

test("should display correct number of products", async ({
  loggedInPage,
  mainPage,
}) => {
  await expect(mainPage.classProduct).toHaveCount(6);
});

test("should add product to cart", async ({ loggedInPage, mainPage }) => {
  await mainPage.addItemToCart("Sauce Labs Backpack");
  await expect(mainPage.cartNumber).toHaveText("1");
});
