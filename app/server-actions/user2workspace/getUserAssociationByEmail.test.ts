import { Role, UserAssociation } from "../types";
import { getUserAssociationByEmail } from "./getUserAssociationByEmail";

jest.mock("./getUserAssociationByEmail", () => ({
  getUserAssociationByEmail: jest.fn(),
}));

describe("getUserAssociationByEmail", () => {
  const userEmail = "test@example.com";
  const mockUserAssociation: UserAssociation = {
    id: "testAssociationId",
    userId: "testUserId",
    userEmail,
    userFullName: "John Doe",
    workspaceId: "workspace123",
    role: "member" as Role,
    joinedAt: new Date(),
    userLastActive: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getUserAssociationByEmail with correct parameters", async () => {
    await getUserAssociationByEmail(userEmail);
    expect(getUserAssociationByEmail).toHaveBeenCalledWith(userEmail);
  });

  it("should return user association when found", async () => {
    (getUserAssociationByEmail as jest.Mock).mockResolvedValue(
      mockUserAssociation
    );
    const result = await getUserAssociationByEmail(userEmail);
    expect(result).toEqual(mockUserAssociation);
  });

  it("should return undefined when user association is not found", async () => {
    (getUserAssociationByEmail as jest.Mock).mockResolvedValue(undefined);
    const result = await getUserAssociationByEmail(userEmail);
    expect(result).toBeUndefined();
  });

  it("should handle errors correctly", async () => {
    (getUserAssociationByEmail as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(getUserAssociationByEmail(userEmail)).rejects.toThrow(
      "Mocked error"
    );
  });
});
