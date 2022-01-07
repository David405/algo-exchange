// TODO rename to fulltable.js : as this components renders 
import React from "react";
import "./fulltable.css";
export function FullTable(props) {
  return (
    <div className="table-responsive ">
      <table className="table table-borderless transaction">
        <thead>
          <tr>
            <th scope="col">Total Value</th>
            <th scope="col">Amount</th>
            <th scope="col">Token Amout</th>
            <th scope="col">Account</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8.55k USDC</td>
            <td>2.28 ETH</td>
            <td>2.28 ETH</td>
            <td>0X2B9C...538e</td>
            <td>1 minute ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
