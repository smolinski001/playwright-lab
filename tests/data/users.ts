export type TestUser = {
  username: string;
  password: string;
};

export const positiveUser: TestUser = {
  username: "standard_user",
  password: "secret_sauce",
};

export const negativeUser: TestUser = {
  username: "locked_out_user",
  password: "secret_sauce",
};
