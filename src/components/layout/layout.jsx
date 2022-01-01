import React from "react";
import "../../vendor/css/style.css";
import { Navbar } from "../widgets/navbar";
import Sidebar from "../widgets/sidebar/sidebar";

export function Layout(props) {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <Navbar />
        {/* MAIN */}
      </div>
    </>
  );
}
