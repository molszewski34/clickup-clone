import { getUsers } from "@/app/server-actions/user/getUser";
import { useQuery } from "@tanstack/react-query";

function useUserQuery() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return users;
}

export default useUserQuery;
