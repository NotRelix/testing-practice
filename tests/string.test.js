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
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("Encrypt Multiple Words", () => {
    expect(caesarCipher("abc def ghij klmnop", 1)).toBe("bcd efg hijk lmnopq");
  });

  test("Encrypt With Different Key", () => {
    expect(caesarCipher("abc def ghij klmnop", 7)).toBe("hij klm nopq rstuvw");
  });

  test("Encrypt with Characters Warping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Encrypt with Case Preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Encrypt with Punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
})
