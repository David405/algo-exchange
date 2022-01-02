import React, { useEffect } from "react";
import { Card } from "../../components/elements/card";
import { WalletKey } from "../../components/elements/input";
import { Balance } from "./balance";
export function Wallet(params) {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card title={"Balance"} components={<Balance  amount={'50Eth'}/>} />
        <Card title={"Private Key"} components={<WalletKey/>} />
        <Card title={"Public Key"} components={<WalletKey/>} />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title={"Transactions"} components={"yes"} />
      </div>
    </div>
  );
}
