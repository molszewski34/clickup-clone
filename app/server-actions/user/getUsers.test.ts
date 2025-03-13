import { getUsers } from "./getUsers";

jest.mock("./getUsers", () => ({
  getUsers: jest.fn(),
}));

describe("getUsers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getUsers without parameters", async () => {
    await getUsers();
    expect(getUsers).toHaveBeenCalled();
  });

  it("should return a list of users", async () => {
    const mockUsers = [
      {
        id: "user1",
        signUpFullName: "John Doe",
        signUpEmail: "john@example.com",
      },
      {
        id: "user2",
        signUpFullName: "Jane Doe",
        signUpEmail: "jane@example.com",
      },
    ];
    (getUsers as jest.Mock).mockResolvedValue(mockUsers);

    const result = await getUsers();
    expect(result).toEqual(mockUsers);
  });

  it("should handle errors correctly", async () => {
    (getUsers as jest.Mock).mockRejectedValue(new Error("Mocked error"));
    await expect(getUsers()).rejects.toThrow("Mocked error");
  });
});
