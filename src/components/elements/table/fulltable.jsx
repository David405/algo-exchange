// TODO rename to fulltable.js : as this components renders 
import React from "react";
import "./fulltable.css";
export function FullTable(props) {
  
   let {transaction:transactionLists} = props
  //  console.log(props);
  var results  = null;
  if (transactionLists.length > 0) {
    results = transactionLists.map((value, key) => {
      return (
        <tr key={key}>
          <td>{value.closingAmount}</td>
          <td>{value.senderRewards}</td>
          <td>{value.fee}</td>
          <td>{value.sender}</td>
          <td>{value.roundTime}</td>
        </tr>
      );
    });
  }
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
          {results}
        </tbody>
      </table>
    </div>
  );
}
