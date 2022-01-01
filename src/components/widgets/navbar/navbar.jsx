import React from "react";
import { SidebarMobileToggle } from "../../elements/button";
import { DesktopSearchBar } from "../../elements/form";
import TopBar from "./topbar";
export function Navbar(params) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <SidebarMobileToggle />
      <DesktopSearchBar />
      <TopBar />
    </nav>
  );
}
