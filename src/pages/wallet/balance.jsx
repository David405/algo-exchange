import React from "react";
import "./balance.css";
export function Balance(props) {
  let { balance = null } = props;
  return (
    <div className="balance-area">
      <span className="mx-auto">{balance}Algo</span>
    </div>
  );
}
