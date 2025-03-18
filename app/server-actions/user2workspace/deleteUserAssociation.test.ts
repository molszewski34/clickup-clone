import { deleteUserAssociation } from "./deleteUserAssociation";

jest.mock("./deleteUserAssociation", () => ({
  deleteUserAssociation: jest.fn(),
}));

describe("deleteUserAssociation", () => {
  const mockUserId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call deleteUserAssociation with correct parameters", async () => {
    await deleteUserAssociation(mockUserId);
    expect(deleteUserAssociation).toHaveBeenCalledWith(mockUserId);
  });

  it("should handle errors correctly", async () => {
    (deleteUserAssociation as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(deleteUserAssociation(mockUserId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
