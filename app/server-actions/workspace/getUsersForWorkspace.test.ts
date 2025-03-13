import { getUsersForWorkspace } from "./getUsersForWorkspace";

jest.mock("./getUsersForWorkspace", () => ({
  getUsersForWorkspace: jest.fn(),
}));

describe("getUsersForWorkspace", () => {
  const mockWorkspaceId = "testWorkspaceId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getUsersForWorkspace with correct parameters", async () => {
    await getUsersForWorkspace(mockWorkspaceId);
    expect(getUsersForWorkspace).toHaveBeenCalledWith(mockWorkspaceId);
  });

  it("should handle errors correctly", async () => {
    (getUsersForWorkspace as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(getUsersForWorkspace(mockWorkspaceId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
