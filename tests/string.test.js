import { capitalize, reverseString } from "../src/string.js"

describe("Capitalize String", () => {
  test("Capitalize First Letter", () => {
    expect(capitalize("testing")).toBe("Testing");
  });

  test("Capitalize First Letter of Every Word", () => {
    expect(capitalize("testing once again")).toBe("Testing Once Again");
  });
});

describe("Reverse String", () => {
  test("Reverse a Single Word", () => {
    expect(reverseString("testing")).toBe("gnitset");
  });

  test("Reverse Multiple Words", () => {
    expect(reverseString("testing once again")).toBe("niaga ecno gnitset");
  });
});
