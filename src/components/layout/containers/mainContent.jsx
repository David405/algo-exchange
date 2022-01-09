import React, { useEffect, useState } from "react";
import "./mainContent.css";
import { formatUrlHeader } from "../../../config";

export function MainContent(props) {
  const chidlrenComponents = props.children;
  let { title = "No page title defined" } = props;
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4 bg-white flat-margin">
        {/* this will dynamically change demanding og */}
        <h1 className="h3 mb-0 text-gray-800 pl-5">
          {formatUrlHeader(props.routeHeader)}
          {/* {routeParams} */}
        </h1>
      </div>
      {chidlrenComponents}
    </div>
  );
}
