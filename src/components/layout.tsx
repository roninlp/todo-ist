import { ReactElement } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        {children}
      </div>
    </>
  );
};
export default Layout;
