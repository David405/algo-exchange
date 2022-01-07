// TODO rename to fulltable.js : as this components renders 
import React from "react";
import "./fulltable.css";
export function SmallTable(params) {
  return (
    <div className="table-responsive ">
      <table className="table table-borderless transaction">
        <thead>
          <tr>
            <th scope="col">Price(USDT)</th>
            <th scope="col">Quantity(BTC)</th>
            <th scope="col">Amount(USDT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>42563.47</td>
            <td>42563.47</td>
            <td>42563.47</td>
          </tr>
        </tbody>
        <tfoot>
        <tr>
            <th>45597.25</th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
}
