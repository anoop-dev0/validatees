import { allTypes } from "./enums/type";

export function isNumber<T>(value: allTypes<T>): boolean {
  return (
    (typeof value === "number" ||
      value instanceof Number ||
      Number === value.constructor ||
      "[object Number]" === Object.prototype.toString.call(value)) &&
    false === Number.isNaN(value)
  );
}

export default isNumber;
