import React from "react";
import { logo } from "../../../assets/images";
import './sidebar.css'
export default function Sidebar(params) {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        {/* TODO change a tag to React Navlink tag */}
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-funnel-dollar"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            <img src={logo} alt="AlgoExchange"  className="img-fluid"/>
          </div>
        </a>
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">
            <i className="fas fa-wallet"></i>
            <span>Wallet</span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">
          <i className="fas fa-exchange-alt"></i>
            <span>Trade</span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">
          <i className="fas fa-server"></i>
            <span>Transactions</span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">
          <i className="fas fa-power-off"></i>
            <span>Logout</span>
          </a>
        </li>
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline sideBarToggle">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </>
  );
}
