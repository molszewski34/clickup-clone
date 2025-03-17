import { getSpaces } from "./getSpaces";

jest.mock("./getSpaces", () => ({
  getSpaces: jest.fn(),
}));

describe("getSpaces", () => {
  const workspaceId = "workspace_123";
  const mockSpaces = [
    { id: "space_1", name: "Space One" },
    { id: "space_2", name: "Space Two" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a list of spaces", async () => {
    (getSpaces as jest.Mock).mockResolvedValue(mockSpaces);

    const result = await getSpaces(workspaceId);

    expect(getSpaces).toHaveBeenCalledWith(workspaceId);
    expect(result).toEqual(mockSpaces);
  });

  it("should throw an error when Firestore query fails", async () => {
    (getSpaces as jest.Mock).mockRejectedValue(
      new Error("Mocked Firestore error")
    );

    await expect(getSpaces(workspaceId)).rejects.toThrow(
      "Mocked Firestore error"
    );
  });
});
