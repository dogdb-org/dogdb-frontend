import logo from "@/assets/image/logo.png";
import { BellIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

interface menu {
  id: number;
  menuName: string;
  link: string;
}
function Header() {
  const menus: menu[] = [
    {
      id: 1,
      menuName: "Home",
      link: "/",
    },
    {
      id: 1,
      menuName: "Breeds",
      link: "/breeds",
    },
    {
      id: 1,
      menuName: "Quiz",
      link: "/quiz",
    },
    {
      id: 1,
      menuName: "Adopt",
      link: "/adopt",
    },
    {
      id: 1,
      menuName: "Donate",
      link: "/donate",
    },
  ];
  return (
    <main className=" flex items-center justify-between bg-background p-3 text-black dark:text-white">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" />
        <h1 className="font-logo text-2xl font-bold">dogdb</h1>
      </div>
      <div className="flex items-center gap-3 font-semibold max-md:hidden">
        <div className="flex items-center gap-10 max-lg:gap-4">
          {menus.map((menu) => (
            <ul key={menu.id} className=" font-main">
              <li>
                <Link href={menu.link}>{menu.menuName}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className=" space-x-2">
          <button className="rounded-full bg-primary px-4 py-1">Login</button>
          <button className="rounded-full  bg-primary-foreground px-4 py-1">
            Sign Up
          </button>
        </div>
        <div className=" rounded-full bg-primary-foreground p-2">
          <BellIcon />
        </div>
        <div className="rounded-full bg-primary-foreground p-2">
          <ChatBubbleIcon />
        </div>
      </div>
      <MobileNav />
    </main>
  );
}

export default Header;
