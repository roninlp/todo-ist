import Link from "next/link";
import LoginBtn from "./loginBtn";
import { SlMenu, SlHome, SlBell, SlQuestion, SlPlus } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between bg-primary py-2 px-8 text-white">
      <div className="flex gap-4 text-lg">
        <SlMenu className="cursor-pointer text-accent" />
        <Link href={"/"}>
          <SlHome className="cursor-pointer text-accent" />
        </Link>
      </div>
      <div className="flex items-center ">
        <div className="flex gap-4 text-lg">
          <SlPlus className="cursor-pointer text-accent" />
          <SlQuestion className="cursor-pointer text-accent" />
          <SlBell className="cursor-pointer text-accent" />
        </div>
        <LoginBtn />
      </div>
    </nav>
  );
};
export default Navbar;
