export type TestUser = {
  username: string;
  password: string;
};
export const positiveUser: TestUser = {
  username: process.env.USER_STANDARD!,
  password: process.env.USER_PASSWORD!,
};
export const negativeUser: TestUser = {
  username: process.env.USER_LOCKED!,
  password: process.env.USER_PASSWORD!,
};

export type CheckoutInfo = {
  firstName: string;
  lastName: string;
  postalCode: string;
};
export const checkoutInformation: CheckoutInfo = {
  firstName: "Jan",
  lastName: "Kowalski",
  postalCode: "02-550",
};
