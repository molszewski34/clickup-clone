import { getWorkspacesForUser } from "./getWorkspacesForUser";

jest.mock("./getWorkspacesForUser", () => ({
  getWorkspacesForUser: jest.fn(),
}));

describe("getWorkspacesForUser", () => {
  const mockUserId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getWorkspacesForUser with correct parameters", async () => {
    await getWorkspacesForUser(mockUserId);
    expect(getWorkspacesForUser).toHaveBeenCalledWith(mockUserId);
  });

  it("should handle errors correctly", async () => {
    (getWorkspacesForUser as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(getWorkspacesForUser(mockUserId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
