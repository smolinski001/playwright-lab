import { test, expect } from "@fixtures/base";

test("Sprawdzenie widoczności mainPage", async ({ page, loggedInPage }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});
