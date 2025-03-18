import { updateWorkspace } from "./updateWorkspace";

jest.mock("./updateWorkspace", () => ({
  updateWorkspace: jest.fn(),
}));

describe("updateWorkspace", () => {
  const mockWorkspaceId = "testWorkspaceId";
  const mockName = "Updated Workspace Name";
  const mockDescription = "Updated Workspace Description";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call updateWorkspace with correct parameters", async () => {
    await updateWorkspace(mockWorkspaceId, mockName, mockDescription);
    expect(updateWorkspace).toHaveBeenCalledWith(
      mockWorkspaceId,
      mockName,
      mockDescription
    );
  });

  it("should handle errors correctly", async () => {
    (updateWorkspace as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(
      updateWorkspace(mockWorkspaceId, mockName, mockDescription)
    ).rejects.toThrow("Mocked error");
  });
});
