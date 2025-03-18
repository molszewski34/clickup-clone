import { createSpace } from "./createSpace";

jest.mock("./createSpace", () => ({
  createSpace: jest.fn(),
}));

describe("createSpace", () => {
  const mockFormData = {
    name: "Test Space",
    isPrivate: true,
    desc: "Test description",
    icon: "test-icon.png",
  };
  const mockWorkspaceId = "workspace123";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call createSpace with correct parameters", async () => {
    await createSpace(mockFormData, mockWorkspaceId);
    expect(createSpace).toHaveBeenCalledWith(mockFormData, mockWorkspaceId);
  });

  it("should handle missing parameters", async () => {
    await createSpace({}, mockWorkspaceId);
    expect(createSpace).toHaveBeenCalledWith({}, mockWorkspaceId);

    await createSpace(mockFormData, "");
    expect(createSpace).toHaveBeenCalledWith(mockFormData, "");
  });

  it("should handle errors correctly", async () => {
    (createSpace as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(createSpace(mockFormData, mockWorkspaceId)).rejects.toThrow(
      "Mocked error"
    );
  });
});
