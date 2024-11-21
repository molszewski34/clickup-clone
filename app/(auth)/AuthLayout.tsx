import Image from "next/image";
import logo from "@/public/app_logo.svg";

export default function AuthLayout({
  Form,
  RedirectButton,
}: {
  Form: React.ComponentType;
  RedirectButton: React.ComponentType;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen bg-login-page bg-cover">
          <div className="flex flex-row px-10 py-12 justify-between">
            <Image src={logo} alt="demo logo"></Image>
            <RedirectButton />
          </div>
          <div className="flex h-full justify-center">
            <div className="flex flex-col w-[480px] py-[30px] px-[60px] shadow-md bg-white rounded-2xl h-fit items-center gap-5">
              <Form />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
