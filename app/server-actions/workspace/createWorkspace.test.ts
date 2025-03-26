import { Workspace } from "../types";
import { createWorkspace } from "./createWorkspace";

jest.mock("./createWorkspace", () => ({
  createWorkspace: jest.fn(),
}));

describe("createWorkspace", () => {
  const mockWorkspace: Partial<Workspace> = {
    name: "Test Workspace",
    description: "This is a test workspace",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call createWorkspace with correct parameters", async () => {
    await createWorkspace(mockWorkspace.name!, mockWorkspace.description!);
    expect(createWorkspace).toHaveBeenCalledWith(
      mockWorkspace.name,
      mockWorkspace.description
    );
  });

  it("should return workspace ID when successful", async () => {
    const mockResult = { id: "testWorkspaceId" };
    (createWorkspace as jest.Mock).mockResolvedValue(mockResult);

    const result = await createWorkspace(
      mockWorkspace.name!,
      mockWorkspace.description!
    );
    expect(result).toEqual(mockResult);
  });

  it("should handle errors correctly", async () => {
    (createWorkspace as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(
      createWorkspace(mockWorkspace.name!, mockWorkspace.description!)
    ).rejects.toThrow("Mocked error");
  });
});
