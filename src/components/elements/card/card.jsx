import React from "react";
export function Card(props) {
  // components ie: trade inputs components
  // TITLE of the action  
    let {title,components=defaultDiv()} = props;
  let cardTitle = (title !== undefined) ?  <div className="card-header py-4">
  <h6 className="m-0 text-primary"> {title}</h6>
</div> : ''
  return (
    <div className="card shadow mb-4">
      {cardTitle}
      <div className="card-body">
        {components}
      </div>
    </div>
  );
}
const defaultDiv = () => {
  return (
    <div className="chart-area"></div>
  );
};
