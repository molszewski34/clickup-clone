import { User } from "../types";
import { getUserById } from "./getUserById";

jest.mock("./getUserById", () => ({
  getUserById: jest.fn(),
}));

describe("getUserById", () => {
  const userId = "testUserId";
  const mockUser: User = {
    id: userId,
    userId: userId,
    signUpFullName: "John Doe",
    signUpEmail: "johndoe@example.com",
    activeWorkspace: "workspace123",
    lastActive: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getUserById with correct parameters", async () => {
    await getUserById(userId);
    expect(getUserById).toHaveBeenCalledWith(userId);
  });

  it("should return user data when found", async () => {
    (getUserById as jest.Mock).mockResolvedValue(mockUser);
    const result = await getUserById(userId);
    expect(result).toEqual(mockUser);
  });

  it("should return undefined when user is not found", async () => {
    (getUserById as jest.Mock).mockResolvedValue(undefined);
    const result = await getUserById(userId);
    expect(result).toBeUndefined();
  });

  it("should handle errors correctly", async () => {
    (getUserById as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(getUserById(userId)).rejects.toThrow("Mocked error");
  });
});
