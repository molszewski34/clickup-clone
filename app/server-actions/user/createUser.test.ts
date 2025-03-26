import { createUser } from "./createUser";

jest.mock("./createUser", () => ({
  createUser: jest.fn(),
}));

describe("createUser", () => {
  const userId = "testUserId";
  const signUpFullName = "John Doe";
  const signUpEmail = "johndoe@example.com";
  const activeWorkspace = "workspace_123";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call createUser with correct parameters", async () => {
    await createUser(signUpFullName, signUpEmail, userId, activeWorkspace);
    expect(createUser).toHaveBeenCalledWith(
      signUpFullName,
      signUpEmail,
      userId,
      activeWorkspace
    );
  });

  it("should handle missing parameters", async () => {
    await createUser("", signUpEmail, userId);
    expect(createUser).toHaveBeenCalledWith("", signUpEmail, userId);

    await createUser(signUpFullName, "", userId);
    expect(createUser).toHaveBeenCalledWith(signUpFullName, "", userId);

    await createUser(signUpFullName, signUpEmail, "");
    expect(createUser).toHaveBeenCalledWith(signUpFullName, signUpEmail, "");
  });

  it("should handle errors correctly", async () => {
    (createUser as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(
      createUser(signUpFullName, signUpEmail, userId, activeWorkspace)
    ).rejects.toThrow("Mocked error");
  });
});
