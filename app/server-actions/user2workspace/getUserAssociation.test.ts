import { getUserAssociation } from "./getUserAssociation";

jest.mock("./getUserAssociation", () => ({
  getUserAssociation: jest.fn(),
}));

describe("getUserAssociation", () => {
  const mockUserId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getUserAssociation with correct parameters", async () => {
    await getUserAssociation(mockUserId);
    expect(getUserAssociation).toHaveBeenCalledWith(mockUserId);
  });

  it("should handle errors correctly", async () => {
    (getUserAssociation as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(getUserAssociation(mockUserId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
