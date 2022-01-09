import React, { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import MainRouter from "../../routes";
import "../../vendor/css/style.css";
import { Navbar } from "../widgets/navbar";
import Sidebar from "../widgets/sidebar/sidebar";
import { Wrapper, MainContent } from "./containers/";

export function Layout() {
  const location = useLocation();

  const currentRoute = location.pathname.split("/")[1];
  const [routeParams, setRouteParams] = useState(currentRoute);

  useEffect(() => {
    if (location.pathname == "/") {
      setRouteParams("Dashboard");
    } else {
      setRouteParams(location.pathname.split("/")[1]);
    }
  }, [location, routeParams]);

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <Wrapper>
          <Navbar />
          <MainContent routeHeader={routeParams}>
            <MainRouter />
          </MainContent>
        </Wrapper>
      </div>
    </>
  );
}
