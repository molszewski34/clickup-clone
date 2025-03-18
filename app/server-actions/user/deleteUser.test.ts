import { deleteUser } from "./deleteUser";

jest.mock("./deleteUser", () => ({
  deleteUser: jest.fn(),
}));

describe("deleteUser", () => {
  const userId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call deleteUser with correct parameters", async () => {
    await deleteUser(userId);
    expect(deleteUser).toHaveBeenCalledWith(userId);
  });

  it("should handle errors correctly", async () => {
    (deleteUser as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(deleteUser(userId)).rejects.toThrow("Mocked error");
  });
});
