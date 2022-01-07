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
        <Navbar />
          <MainContent title="Algo exchange">
            <MainRouter />
          </MainContent>
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}
