import React from "react";
import $ from "jquery";

import { API_KEY, MNEMONIC, URL, PRIVATE_KEY, PUBLIC_KEY } from "../../../apis";
import { Button, TradeInput } from "../../elements";
import styles from "./styles.module.css";

const BuyAndSellWidget = () => {
  const buyTrade = () => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `${URL}/algorand/transaction`,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-api-key": `${API_KEY}`
      },
      "processData": false,
      "data": `{"from":${PUBLIC_KEY},"to":"NTAESFCB3WOD7SAOL42KSPVARLB3JFA3MNX3AESWHYVT2RMYDVZI6YLG4Y","amount":"1","fromPrivateKey":${PRIVATE_KEY}}`
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  const sellTrade = () => {
    
  }

  return (
    <section className="d-flex flex-wrap justify-content-between">
      <aside className={`${styles.widget_group}`}>
        <TradeInput inputTag="Price" defaultValue="456009" />
        <TradeInput inputTag="Quantity" defaultValue="0" />
        <Button label="Buy" onClick={buyTrade} buttonVariant="primary" type="button" loadingText="Processing" />
      </aside>
      <aside className={`${styles.widget_group}`}>
        <TradeInput inputTag="Price" defaultValue="456009" />
        <TradeInput inputTag="Quantity" defaultValue="0" />
        <Button label="Sell" buttonVariant="secondary" type="button" loadingText="Processing..." />
      </aside>
    </section>
  );
};

export { BuyAndSellWidget };
