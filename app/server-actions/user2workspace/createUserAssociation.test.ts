import { Role } from "../types";
import { createUserAssociation } from "./createUserAssociation";

jest.mock("./createUserAssociation", () => ({
  createUserAssociation: jest.fn(),
}));

describe("createUserAssociation", () => {
  const userId = "testUserId";
  const workspaceId = "workspace_123";
  const role: Role = "admin" as Role;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call createUserAssociation with correct parameters", async () => {
    await createUserAssociation(userId, workspaceId, role);
    expect(createUserAssociation).toHaveBeenCalledWith(
      userId,
      workspaceId,
      role
    );
  });

  it("should handle errors correctly", async () => {
    (createUserAssociation as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(
      createUserAssociation(userId, workspaceId, role)
    ).rejects.toThrow("Mocked error");
  });
});
