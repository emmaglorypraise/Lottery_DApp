import Navbar from "./navbar";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({children}:IProps) => {
  return <>
  <Navbar/>
  <main>{children}</main>
  </>
}

export default Layout;