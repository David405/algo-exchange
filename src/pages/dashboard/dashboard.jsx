import React from "react";
import $ from "jquery";

import { API_KEY, MNEMONIC, URL, PRIVATE_KEY, PUBLIC_KEY } from "../../apis";
import { Card } from "../../components/elements/card";
import { Button } from "../../components/elements";
import "./dashboard.css";

export function Dashboard(props) {
    // The response from this has to be displayed on the interface
    const generateAlgoWallet = () => {
      const settings = {
        "async": true,
        "crossDomain": true,
        "url": `${URL}/algorand/wallet?mnemonic=${MNEMONIC}`,
        "method": "GET",
        "headers": {
          "x-api-key": `${API_KEY}`
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem("address", JSON.stringify(response.address));
        localStorage.setItem("private key", JSON.stringify(response.secret));
      });
    }

  // display on interface
  const createUserLedger = () => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `${URL}/ledger/account`,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-api-key": `${API_KEY}`
      },
      "processData": false,
      "data": `{\"currency\":\"ALGO\",\"xpub\":${PUBLIC_KEY},\"customer\":{\"accountingCurrency\":\"USD\",\"customerCountry\":\"US\",\"externalId\":\"123654\",\"providerCountry\":\"US\"},\"compliant\":false,\"accountCode\":\"AC_1011_B\",\"accountingCurrency\":\"USD\",\"accountNumber\":\"123456\"}`
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
  createUserLedger();

  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <div className="row">
            <div className="col-lg-6">
            <Card title={"Generate Algorand Wallet"} components={<Button  onClick={generateAlgoWallet} label={"generate wallet"} className="generate-btn"/>} />
            </div>
            <div className="col-lg-6">
            <Card title={"Create User Ledger Account"} components={<Button  onClick={createUserLedger} label={"create ledger"} className="generate-btn"/>} />
            </div>
        </div>
        <Card />
        <Card />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card />
      </div>
    </div>
  );
}
