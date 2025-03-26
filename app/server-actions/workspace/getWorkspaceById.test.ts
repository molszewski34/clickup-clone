import { getWorkspaceById } from "./getWorkspaceById";

jest.mock("./getWorkspaceById", () => ({
  getWorkspaceById: jest.fn(),
}));

describe("getWorkspaceById", () => {
  const workspaceId = "workspace_123";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getWorkspaceById with correct parameters", async () => {
    await getWorkspaceById(workspaceId);
    expect(getWorkspaceById).toHaveBeenCalledWith(workspaceId);
  });

  it("should handle errors correctly", async () => {
    (getWorkspaceById as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(getWorkspaceById(workspaceId)).rejects.toThrow("Mocked error");
  });
});
