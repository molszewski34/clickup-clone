import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export const LoginRedirectButton: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-10 items-center">
      <p className="font-semibold text-gray-800">{"Don't have an account?"}</p>
      <Button shadow onClick={() => router.push("/signup")}>
        Sign up
      </Button>
    </div>
  );
};
