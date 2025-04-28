import { calculator } from "../src/math.js"

describe("Calculator Functions", () => {
  test("Add Numbers", () => {
    expect(calculator.add(1, 3)).toBe(4);
  });

  test("Add Numbers with Negatives", () => {
    expect(calculator.add(-1, 5)).toBe(4);
  });

  test("Subtract Numbers", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  });

  test("Subtract Numbers with Negatives", () => {
    expect(calculator.subtract(-5, 8)).toBe(-13);
  });

  test("Multiply Numbers", () => {
    expect(calculator.multiply(6, 7)).toBe(42);
  });

  test("Multiply Numbers with Negatives", () => {
    expect(calculator.multiply(6, -7)).toBe(-42);
  });

  test("Divide Numbers", () => {
    expect(calculator.divide(77, 7)).toBe(11);
  });

  test("Divide Numbers with Negatives", () => {
    expect(calculator.divide(80, -8)).toBe(-10);
  });

  test("Divide Numbers with Decimals", () => {
    expect(calculator.divide(80, 7)).toBe(11.4);
  });
});
