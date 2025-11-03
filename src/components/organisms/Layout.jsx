import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/organisms/Sidebar";
import MobileNav from "@/components/organisms/MobileNav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      <div className="lg:pl-64">
        <main className="pb-16 lg:pb-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;