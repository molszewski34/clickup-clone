import { Role } from "../types";
import { updateUserAssociation } from "./updateUserAssociation";

jest.mock("./updateUserAssociation", () => ({
  updateUserAssociation: jest.fn(),
}));

describe("updateUserAssociation", () => {
  const id = "testAssociationId";
  const role: Role = "admin" as Role;
  const userEmail = "test@example.com";
  const userFullName = "John Doe";
  const userId = "testUserId";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call updateUserAssociation with correct parameters", async () => {
    await updateUserAssociation(id, role, userEmail, userFullName, userId);
    expect(updateUserAssociation).toHaveBeenCalledWith(
      id,
      role,
      userEmail,
      userFullName,
      userId
    );
  });

  it("should handle partial updates", async () => {
    await updateUserAssociation(id, undefined, userEmail);
    expect(updateUserAssociation).toHaveBeenCalledWith(
      id,
      undefined,
      userEmail
    );

    await updateUserAssociation(id, role);
    expect(updateUserAssociation).toHaveBeenCalledWith(id, role);
  });

  it("should handle errors correctly", async () => {
    (updateUserAssociation as jest.Mock).mockRejectedValue(
      new Error("Mocked error")
    );
    await expect(
      updateUserAssociation(id, role, userEmail, userFullName, userId)
    ).rejects.toThrow("Mocked error");
  });
});
