import { capitalize } from "../src/string.js"

describe("String Checks", () => {
  test("Capitalize First Letter", () => {
    expect(capitalize("testing")).toBe("Testing");
  });

  test("Capitalize First Letter of Every Word", () => {
    expect(capitalize("testing once again")).toBe("Testing Once Again");
  });
});