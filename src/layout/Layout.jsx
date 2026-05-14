import { Outlet } from "react-router-dom";
import Navbar from "./header/Navbar";
import Header from "./header/Header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 pt-10 pb-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
