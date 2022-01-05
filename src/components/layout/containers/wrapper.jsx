import React from "react";
export function Wrapper(props) {
const chidlrenComponents  = props.children
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
          {chidlrenComponents}
      </div>
    </div>
  );
}
