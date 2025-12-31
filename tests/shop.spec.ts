import { test, expect } from "@playwright/test";

test.describe("Shopping", () => {
  // sign in on website
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");
    await page.click('[data-test="login-button"]');

    // Verification sign in
    await expect(page).toHaveURL(/inventory/);
  });

  test("should add backpack to cart", async ({ page }) => {
    // Twoje zadanie bojowe zaczyna się tutaj! 👇

    // 1. Znajdź guzik "Add to cart" KONKRETNIE dla plecaka (Backpack) i kliknij go
    // Wskazówka: Saucedemo ma fajne, unikalne selektory data-test dla każdego produktu
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // 2. Sprawdź, czy na ikonie koszyka pojawiła się czerwona cyferka "1"
    // To szybki test, czy akcja zadziałała
    await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

    // 3. Wejdź do koszyka (kliknij w ikonę wózka)
    await page.click(".shopping_cart_link");

    // 4. Sprawdź, czy jesteśmy na stronie koszyka (URL powinien zawierać "cart")
    await expect(page).toHaveURL(/cart/);

    // 5. FINAL BOSS: Sprawdź, czy w koszyku faktycznie leży "Sauce Labs Backpack"
    // Szukamy elementu z nazwą produktu i sprawdzamy, czy ma dobry tekst
    await expect(page.locator(".inventory_item_name")).toHaveText(
      "Sauce Labs Backpack"
    );
  });
});
