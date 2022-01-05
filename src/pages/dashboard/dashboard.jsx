import React from "react";
import { Card } from "../../components/elements/card";
export function Dashboard(props) {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <div className="row">
            <div className="col-lg-6">
            <Card />
            </div>
            <div className="col-lg-6">
            <Card />
            </div>
        </div>
        <Card />
        <Card />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card />
      </div>
    </div>
  );
}
