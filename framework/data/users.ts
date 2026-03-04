export type TestUser = {
  username: string;
  password: string;
};

export type CheckoutInfo = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export const positiveUser: TestUser = {
  username: "standard_user",
  password: "secret_sauce",
};

export const negativeUser: TestUser = {
  username: "locked_out_user",
  password: "secret_sauce",
};

export const checkoutInformation: CheckoutInfo = {
  firstName: "Jan",
  lastName: "Kowalski",
  postalCode: "02-550",
};
