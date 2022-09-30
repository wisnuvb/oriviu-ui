import getOr from "lodash/fp/getOr";

export const classNames = (...classes: any[]) =>
  classes.filter(Boolean).join(" ");

export const getCustomerName = (profileObj: null | undefined) => {
  const firstName = getOr("")("firstName")(profileObj);
  const lastName = getOr("")("lastName")(profileObj);
  return lastName ? `${firstName} ${lastName}` : firstName;
};
