import React, { useEffect } from "react";
import { Card } from "../../components/elements/card";
import { Balance } from "./balance";
export function Wallet(params) {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card title={"Balance"} components={<Balance  amount={'50Eth'}/>} />
        <Card title={"Private Key"} components={"yes"} />
        <Card title={"Public Key"} components={"yes"} />
        {/* balance component */}
        {/* private keys */}
        {/* public keys */}
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title={"Tran"} components={"yes"} />
        {/* transaction table */}
      </div>
    </div>
  );
}
