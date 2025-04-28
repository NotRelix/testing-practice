import { caesarCipher, capitalize, reverseString } from "../src/string.js"

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

describe("Caesar Cipher Encryption", () => {
  test("Encrypt Simple Text", () => {
    expect(caesarCipher("abc", 1)).toBe("BCD");
  });

  test("Encrypt Multiple Words", () => {
    expect(caesarCipher("abc def ghij klmnop", 1)).toBe("BCD EFG HIJK LMNOPQ");
  });

  test("Encrypt With Different Key", () => {
    expect(caesarCipher("abc def ghij klmnop", 7)).toBe("HIJ KLM NOPQ RSTUVW");
  });
})
