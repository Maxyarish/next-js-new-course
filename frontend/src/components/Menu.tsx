import { PAGES } from "@/config/pages.config";
import Link from "next/link";

export function Menu() {
  return (
    <div className="text-2xl">
      <h2 className="p-2">
        Menu:
        <Link href={PAGES.HOME} className="p-1">
          Home
        </Link>
        <Link href={PAGES.PROFILE} className="p-1">
          Profile
        </Link>
        <Link href={PAGES.ABOUT_US} className="p-2">
          About us
        </Link>
      </h2>
    </div>
  );
}
