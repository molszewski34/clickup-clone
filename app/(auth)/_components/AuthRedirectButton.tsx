import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { RedirectTo } from "../types/types";

type AuthRedirectButtonProps = {
  redirectTo: RedirectTo;
};

export const AuthRedirectButton = ({ redirectTo }: AuthRedirectButtonProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-4 items-center">
      {redirectTo === RedirectTo.login && (
        <p className="text-sm text-gray-800">Already have an account?</p>
      )}
      {redirectTo === RedirectTo.signup && (
        <p className="text-sm text-gray-800">{"Don't have an account?"}</p>
      )}
      <Button
        shadow
        onClick={() =>
          router.push(`/${Object.keys(RedirectTo)[Object.values(RedirectTo).indexOf(redirectTo)]}`)
        }
        className="text-sm min-w-28">
        {redirectTo}
      </Button>
    </div>
  );
};
