import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../../routes";
import "../../vendor/css/style.css";
import { Navbar } from "../widgets/navbar";
import Sidebar from "../widgets/sidebar/sidebar";
import { MainContent, Wrapper } from "./containers/";

export function Layout() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Wrapper>
          <MainContent title="Algo exchange">
            <Navbar />
            <MainRouter />
          </MainContent>
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}
