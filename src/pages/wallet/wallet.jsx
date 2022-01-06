import React, { useEffect } from "react";
import $ from "jquery";
//import { generateAlgoWallet, generateAlgodAddressFromPrivatetKey } from '@tatumio/tatum';

import { API_KEY, MNEMONIC, URL, PRIVATE_KEY, PUBLIC_KEY } from "../../apis";
import { Card } from "../../components/elements/card";
import { WalletKey } from "../../components/elements/input";
import { Balance } from "./balance";
import { Button } from "../../components/elements";

export function Wallet(params) {

  // A button should go into the public key card that should call this function and display the response
  const getAddressfromPrivateKey = () => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `${URL}/algorand/address/${PRIVATE_KEY}`,
      "method": "GET",
      "headers": {
        "x-api-key": `${API_KEY}`
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  // This should be displayed in the Balance card
  const getAlgoBalance = () => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `${URL}/algorand/account/balance/${PUBLIC_KEY}`,
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
        <Card title={"Algo Balance"} component={<Balance />} />
        <Card title={"Private Key"} components={<WalletKey/>} />
        <Card title={"Public Key"} components={<WalletKey/>} />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title={"Transactions"} components={"yes"} />
      </div>
    </div>
  );
}
