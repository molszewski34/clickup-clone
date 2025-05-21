import { updateUserKey } from "./updateUserKey";

jest.mock("./updateUserKey", () => ({
  updateUserKey: jest.fn(),
}));

describe("updateUserKey", () => {
  const oldId = "oldUserId";
  const newId = "newUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call updateUserKey with correct parameters", async () => {
    await updateUserKey(oldId, newId);
    expect(updateUserKey).toHaveBeenCalledWith(oldId, newId);
  });

  it("should return success message when update is successful", async () => {
    (updateUserKey as jest.Mock).mockResolvedValue({
      success: true,
      message: "User ID updated successfully",
    });
    const result = await updateUserKey(oldId, newId);
    expect(result).toEqual({
      success: true,
      message: "User ID updated successfully",
    });
  });

  it("should return error message when old user data is not found", async () => {
    (updateUserKey as jest.Mock).mockResolvedValue({
      success: false,
      message: "Old user data not found",
    });
    const result = await updateUserKey(oldId, newId);
    expect(result).toEqual({
      success: false,
      message: "Old user data not found",
    });
  });

  it("should return error message when newId is missing", async () => {
    (updateUserKey as jest.Mock).mockRejectedValue(
      new Error("User is not authenticated")
    );
    await expect(updateUserKey(oldId, "")).rejects.toThrow(
      "User is not authenticated"
    );
  });

  it("should handle internal server errors", async () => {
    (updateUserKey as jest.Mock).mockRejectedValue(
      new Error("Internal server error")
    );
    await expect(updateUserKey(oldId, newId)).rejects.toThrow(
      "Internal server error"
    );
  });
});
