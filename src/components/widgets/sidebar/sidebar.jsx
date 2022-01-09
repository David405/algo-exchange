import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../../assets/images";
import "./sidebar.css";

export default function Sidebar() {
  // Location object
  const location = useLocation();
  // Sidebar links
  const SidebarLinks = useMemo(
    () => [
      {
        linkTitle: "Dashboard",
        url: "/",
        fa_icon: "fas fa-fw fa-tachometer-alt"
      },
      {
        linkTitle: "Wallet",
        url: "/wallet",
        fa_icon: "fas fa-wallet"
      },
      {
        linkTitle: "Trade",
        url: "/trade",
        fa_icon: "fas fa-exchange-alt"
      },
      {
        linkTitle: "Transactions",
        url: "/transactions",
        fa_icon: "fas fa-server"
      },
      {
        linkTitle: "Logout",
        url: "/logout",
        fa_icon: "fas fa-power-off"
      }
    ],
    []
  );

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      id="accordionSidebar"
    >
      {/* TODO change a tag to React Navlink tag */}
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <span>
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-funnel-dollar"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            <img src={logo} alt="AlgoExchange" className="img-fluid" />
          </div>
        </span>
      </Link>
      {/* Nav Item - Dashboard */}
      {SidebarLinks.map(linkItem => {
        return (
          <li
            key={`${linkItem.fa_icon}`}
            className={`nav-item ${
              location.pathname === linkItem.url ? "active" : ""
            }`}
          >
            <Link className="nav-link" to={linkItem.url}>
              <span>
                <i className={linkItem.fa_icon} />
                <span>{linkItem.linkTitle}</span>
              </span>
            </Link>
          </li>
        );
      })}
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline sideBarToggle">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
}
