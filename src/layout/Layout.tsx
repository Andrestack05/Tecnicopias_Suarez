import { ReactNode } from "react";
import Navbar from "../components/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
};

export default Layout;
