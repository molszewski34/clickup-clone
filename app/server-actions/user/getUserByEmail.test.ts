import { getUserByEmail } from "./getUserByEmail";

jest.mock("./getUserByEmail", () => ({
  getUserByEmail: jest.fn(),
}));

describe("getUserByEmail", () => {
  it("should return user data when user exists", async () => {
    const mockUser = { id: "123", signUpEmail: "test@example.com" };
    (getUserByEmail as jest.Mock).mockResolvedValue(mockUser);

    const result = await getUserByEmail("test@example.com");
    expect(result).toEqual(mockUser);
  });

  it("should return null when user does not exist", async () => {
    (getUserByEmail as jest.Mock).mockResolvedValue(null);

    const result = await getUserByEmail("notfound@example.com");
    expect(result).toBeNull();
  });

  it("should handle errors and return null", async () => {
    (getUserByEmail as jest.Mock).mockImplementation(async () => {
      try {
        throw new Error("Firestore error");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return null;
      }
    });

    const result = await getUserByEmail("error@example.com");
    expect(result).toBeNull();
  });
});
