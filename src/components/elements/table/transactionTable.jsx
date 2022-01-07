// TODO rename to fulltable.js : as this components renders 
import React from "react";
import "./fulltable.css";
import { Link } from "react-router-dom";
// TODO refactor small table
export function TransactionTable(props) {
  
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
          </tr>
        </thead>
        <tbody>
          {results}
        </tbody>
      </table>
      <Link to="/transactions" className="view-details">View Details</Link>
    </div>
  );
}
