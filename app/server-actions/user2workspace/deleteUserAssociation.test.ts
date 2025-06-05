import { deleteUserAssociationByUserId } from "./deleteUserAssociationByUserId";

jest.mock("./deleteUserAssociationByUserId", () => ({
  deleteUserAssociationByUserId: jest.fn(),
}));

describe("deleteUserAssociation", () => {
  const mockUserId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call deleteUserAssociation with correct parameters", async () => {
    await deleteUserAssociationByUserId(mockUserId);
    expect(deleteUserAssociationByUserId).toHaveBeenCalledWith(mockUserId);
  });

  it("should handle errors correctly", async () => {
    (deleteUserAssociationByUserId as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(deleteUserAssociationByUserId(mockUserId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
