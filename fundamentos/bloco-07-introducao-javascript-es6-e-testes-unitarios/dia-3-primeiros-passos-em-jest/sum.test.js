const { expect } = require("@jest/globals");
const sum = require("./sum");

test("Se a soma de 4+5 é 9", () => {
  expect(sum(4, 5)).toEqual(9);
});
