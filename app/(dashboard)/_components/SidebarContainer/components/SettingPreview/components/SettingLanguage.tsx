import { Icons } from "@/icons/icons";

export default function SettingLanguage() {
  return (
    <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6  border-b border-gray-200 mb-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="font-sans text-sm/snug font-medium text-gray-900">
          Language & Region
        </h2>
        <p className="font-sans text-xs/6 text-gray-500">
          Customize your language and region.
        </p>
      </div>
      <div className="block">
        <div className="">
          <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
            Language
          </h2>
          <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
            <Icons.PersonIcon className="text-[14px] text-gray-800" />
            <select className="block appearance-none w-full bg-white text-sm font-sans text-gray-800 hover:border-gray-500 px-4 py-2 leading-tight focus:outline-none focus:shadow-outline">
              <option>English</option>
              <option>Français</option>
              <option>Español (España)</option>
              <option>Español (Latinoamérica)</option>
              <option>Português (Brasil)</option>
              <option>Deutsch</option>
              <option>Italiano</option>
            </select>
            <Icons.ArrowDownIcon className="text-[14px] text-gray-800" />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
            Timezone
          </h2>
          <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
            <Icons.PersonIcon className="text-[14px] text-gray-800" />
            <select className="block appearance-none w-full bg-white text-sm font-sans text-gray-800 hover:border-gray-500 px-4 py-2 leading-tight focus:outline-none focus:shadow-outline">
              <option>Europe Poland</option>
            </select>
            <Icons.ArrowDownIcon className="text-[14px] text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
