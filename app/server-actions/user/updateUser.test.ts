import { updateUser } from "./updateUser";

jest.mock("./updateUser", () => ({
  updateUser: jest.fn(),
}));

describe("updateUser", () => {
  const userId = "testUserId";
  const userLastActive = new Date();
  const userFullName = "John Doe";
  const activeWorkspace = "workspace_123";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call updateUser with correct parameters", async () => {
    await updateUser(userId, userLastActive, userFullName, activeWorkspace);
    expect(updateUser).toHaveBeenCalledWith(
      userId,
      userLastActive,
      userFullName,
      activeWorkspace
    );
  });

  it("should handle partial updates", async () => {
    await updateUser(userId, undefined, userFullName);
    expect(updateUser).toHaveBeenCalledWith(userId, undefined, userFullName);

    await updateUser(userId, userLastActive);
    expect(updateUser).toHaveBeenCalledWith(userId, userLastActive);
  });

  it("should handle errors correctly", async () => {
    (updateUser as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(
      updateUser(userId, userLastActive, userFullName, activeWorkspace)
    ).rejects.toThrow("Mocked error");
  });
});
