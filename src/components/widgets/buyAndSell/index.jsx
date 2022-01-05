import React from "react";
import { Button, TradeInput } from "../../elements";
import styles from "./styles.module.css";

const BuyAndSellWidget = () => {
  return (
    <section className="d-flex flex-wrap justify-content-between">
      <aside className={`${styles.widget_group}`}>
        <TradeInput inputTag="Price" defaultValue="456009" />
        <TradeInput inputTag="Quantity" defaultValue="0" />
        <Button label="Buy" buttonVariant="primary" type="button" loadingText="Processing" />
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
