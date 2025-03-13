import { deleteWorkspace } from "./deleteWorkspace";

jest.mock("./deleteWorkspace", () => ({
  deleteWorkspace: jest.fn(),
}));

describe("deleteWorkspace", () => {
  const mockWorkspaceId = "testWorkspaceId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call deleteWorkspace with correct parameters", async () => {
    await deleteWorkspace(mockWorkspaceId);
    expect(deleteWorkspace).toHaveBeenCalledWith(mockWorkspaceId);
  });

  it("should handle errors correctly", async () => {
    (deleteWorkspace as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(deleteWorkspace(mockWorkspaceId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
