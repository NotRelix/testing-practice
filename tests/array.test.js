import { analyzeArray } from "../src/array.js"

describe("Analyzing an Array", () => {
  test("Returns an Object", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(typeof object).toBe("object");
  });

  test("Returns the Average", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.average).toBe(4);
  });

  test("Returns the Min", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.min).toBe(1);
  });

  test("Returns the Max", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.max).toBe(8);
  });

  test("Returns the Length of the Array", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.length).toBe(6);
  });

  test("Returns the Entire Object", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
  });
});
