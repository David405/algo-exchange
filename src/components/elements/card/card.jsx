import React from "react";
export function Card(props) {
    let {title,components} = props;
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-4">
        <h6 className="m-0 text-primary"> {title}</h6>
      </div>
      <div className="card-body">
        {components}
      </div>
    </div>
  );
}
