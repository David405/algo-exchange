import React from "react";
import './balance.css'
export function Balance(props) {
  let { amount=5 } = props;
  return (
    <div className="balance-area">
      <span className="mx-auto">{amount}</span>
    </div>
  );
}
