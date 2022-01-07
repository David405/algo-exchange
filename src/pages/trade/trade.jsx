import React from "react";
import { Card } from "../../components/elements/card";
import { BuyAndSellWidget } from "../../components/widgets/buyAndSell";
import { OrderBook } from "../../components/widgets/orderBook";
import { TradeView } from "../../components/widgets/tradeView/index";

export function Trade() {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card title={"Trade Center"} components={<TradeView />} />
        <Card title={"Trade Center"} components={<BuyAndSellWidget />} />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title={"Order Book"} components={<OrderBook/>}/>
      </div>
    </div>
  );
}
