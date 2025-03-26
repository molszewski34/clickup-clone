import { getUsers } from "@/app/server-actions/user/getUsers";
import { useQuery } from "@tanstack/react-query";

function useUsersGetUsers() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return users;
}

export default useUsersGetUsers;
