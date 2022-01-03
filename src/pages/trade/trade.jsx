import React, { useEffect } from "react";
import { Card } from "../../components/elements/card";
export function Trade(props) {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card title={""} />
        <Card title={"Trade Center"} />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title={"Order Book"} />
      </div>
    </div>
  );
}
