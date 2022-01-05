import React from "react";
import { MobileSearchBar } from "../../elements/form";
import UserInformation from "./userInformation";
export default function TopBar(params) {
  return (
    <ul className="navbar-nav ml-auto">
      {/* Nav Item - Search Dropdown (Visible Only XS) */}
      <li className="nav-item dropdown no-arrow d-sm-none">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-search fa-fw" />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          {/* SEARCHABAR FOR DESKTOP VIEW */}
          <MobileSearchBar/>
        </div>
      </li>
      <div className="topbar-divider d-none d-sm-block" />
      <UserInformation/>
      {/* Nav Item - User Information */}
    </ul>
  );
};
