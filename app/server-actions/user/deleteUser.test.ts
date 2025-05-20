import { deleteUserFromFirestore } from "./deleteUser";

jest.mock("./deleteUser", () => ({
  deleteUserFromFirestore: jest.fn(),
}));

describe("deleteUserFromFirestore", () => {
  const userId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call deleteUserFromFirestore with correct parameters", async () => {
    await deleteUserFromFirestore(userId);
    expect(deleteUserFromFirestore).toHaveBeenCalledWith(userId);
  });

  it("should handle errors correctly", async () => {
    (deleteUserFromFirestore as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(deleteUserFromFirestore(userId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
