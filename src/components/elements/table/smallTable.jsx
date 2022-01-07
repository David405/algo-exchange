// TODO rename to fulltable.js : as this components renders
import React from "react";
import "./fulltable.css";
export function SmallTable(props) {
  let {
    sellTransactions: sellTransactionList,
    buyTransactions: buyTransactionList
  } = props;
  var resultForSell = null;
  if (sellTransactionList.length > 0) {
    resultForSell = sellTransactionList.map((value, key) => {
      return (
        <tr key={key}>
          <td>{value.price}</td>
          <td>{value.amount}</td>
          <td>{value.fee}</td>
        </tr>
      );
    });
  }
  var resultForBuy = null;
  if (buyTransactionList.length > 0) {
    resultForBuy = buyTransactionList.map((value, key) => {
      return (
        <tr key={key}>
          <td>{value.price}</td>
          <td>{value.amount}</td>
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
            <th scope="col">Price(BTC/EUR)</th>
            <th scope="col">Amount(BTC/EUR)</th>
            <th scope="col">Fee(BTC/EUR)</th>
          </tr>
        </thead>
        <tbody className="buy">{resultForBuy}</tbody>
        <tbody>
          <tr><td className="total">45597.25</td></tr>
        </tbody>
        <tbody className="sell">{resultForSell}</tbody>
      </table>
    </div>
  );
}
