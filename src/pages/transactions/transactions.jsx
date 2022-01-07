import React from "react";
import $ from "jquery";

import { API_KEY, MNEMONIC, URL, PRIVATE_KEY, PUBLIC_KEY } from "../../apis";
import { Card } from "../../components/elements/card";
import { OrderBook } from "../../components/widgets/orderBook";
import { FullTransactionWidget } from "../../components/widgets/transactions";

export function Transactions(params) {
  let from = "2022-01-03T20:44:39Z";
  let to = "2022-01-06T20:44:39Z";

  // Returns an object that has an array of transactions
  const getTransactionHistory = () => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `${URL}/algorand/transactions/${from}/${to}?limit=5&next=ywAAAAAAAAAAAAAA`,
      "method": "GET",
      "headers": {
        "x-api-key": `${API_KEY}`
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }


  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card 
        components = {<FullTransactionWidget/>}
        // components={<Button  onClick={getTransactionHistory} label={"get transactions"} className="generate-btn"/>} 
        />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title="Order Book" components={<OrderBook/>}/>
      </div>
    </div>
  );
}
