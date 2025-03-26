import { generateFirebaseId } from "./generateFirebaseId";

describe("generateFirebaseId", () => {
  test("should generate an ID with the default length of 28 characters", () => {
    const id = generateFirebaseId();
    expect(id).toHaveLength(28);
  });

  test("should generate an ID with a custom length", () => {
    const customLength = 16;
    const id = generateFirebaseId(customLength);
    expect(id).toHaveLength(customLength);
  });

  test("should generate an ID containing only valid characters", () => {
    const id = generateFirebaseId();
    const validChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (const char of id) {
      expect(validChars).toContain(char);
    }
  });

  test("should generate unique IDs", () => {
    const id1 = generateFirebaseId();
    const id2 = generateFirebaseId();
    expect(id1).not.toBe(id2);
  });
});
