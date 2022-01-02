import React from "react";
import { Wallet } from "../../pages/wallet";
import "../../vendor/css/style.css";
import { Navbar } from "../widgets/navbar";
import Sidebar from "../widgets/sidebar/sidebar";
import { Wrapper,MainContent } from "./containers/";

export function Layout(props) {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <Wrapper>
          <Navbar />
          <MainContent>
              {/* pages content */}
              <Wallet/>
          </MainContent>
        </Wrapper>

        {/*
        ALERT! Other components/ pages route  will stay inside the main
        ALERT! I am guessing logins and signup will have its on layout 
        */}
      </div>
    </>
  );
}
