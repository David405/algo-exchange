import React from "react";
export  function MainContent(props) {
  const chidlrenComponents = props.children
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
        {chidlrenComponents}
    </div>
  );
}
