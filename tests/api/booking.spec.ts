import { test, expect } from "@playwright/test";

test("Testing API", async ({ request }) => {
  const response = await request.get("https://restful-booker.herokuapp.com/booking");
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
});

test("single ID", async ({ request }) => {
  const response = await request.get("https://restful-booker.herokuapp.com/booking/1");
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.firstname).toBeDefined();
});
