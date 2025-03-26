import { deleteSpace } from "./deleteSpace";

jest.mock("./deleteSpace", () => ({
  deleteSpace: jest.fn(),
}));

describe("deleteSpace", () => {
  const workspaceId = "workspace_123";
  const spaceId = "space_456";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call deleteSpace with correct parameters", async () => {
    await deleteSpace(workspaceId, spaceId);

    expect(deleteSpace).toHaveBeenCalledWith(workspaceId, spaceId);
  });

  it("should throw an error when Firestore deletion fails", async () => {
    (deleteSpace as jest.Mock).mockRejectedValue(
      new Error("Mocked Firestore error")
    );

    await expect(deleteSpace(workspaceId, spaceId)).rejects.toThrow(
      "Mocked Firestore error"
    );
  });
});
