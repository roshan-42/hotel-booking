import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const urlPath = window.location.pathname;
  console.log("Check url path:", urlPath);

  const isAdminPanel = urlPath.startsWith("/admin-panel");

  return (
    <>
      {!isAdminPanel && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
