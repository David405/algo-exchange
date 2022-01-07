import React, { useState, useEffect } from "react";
import $ from "jquery";
//import { generateAlgoWallet, generateAlgodAddressFromPrivatetKey } from '@tatumio/tatum';

import { API_KEY, MNEMONIC, URL, PRIVATE_KEY, PUBLIC_KEY } from "../../apis";
import { Card } from "../../components/elements/card";
import { WalletKey } from "../../components/elements/input";
import { Button } from "../../components/elements";
import { Balance } from ".";
import { MiniTransactionWidget } from "../../components/widgets/transactions";

export function Wallet(params) {
  const [balance, setBalance] = useState(0);
  const [publicKey, setpublicKey] = useState(0);
  useEffect(() => {
    const getAddressfromPrivateKey = () => {
      const settings = {
        async: true,
        crossDomain: true,
        url: `${URL}/algorand/address/${PRIVATE_KEY}`,
        method: "GET",
        headers: {
          "x-api-key": `${API_KEY}`
        }
      };
      $.ajax(settings).done(function(response) {
        setpublicKey(response);
      });
    };
    getAddressfromPrivateKey();
  }, [publicKey]);
  useEffect(() => {
    const getAlgoBalance = () => {
      const settings = {
        async: true,
        crossDomain: true,
        url: `${URL}/algorand/account/balance/${PUBLIC_KEY}`,
        method: "GET",
        headers: {
          "x-api-key": `${API_KEY}`
        }
      };
      $.ajax(settings).done(function(response) {
        setBalance(response);
      });
    };
    getAlgoBalance();
  }, [balance]);
  // A button should go into the public key card that should call this function and display the response
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card
          title={"Algo Balance"}
          components={<Balance balance={balance} dsds="sdsds" />}
        />
        <Card
          title={"Private Key"}
          components={<WalletKey uniqKey={publicKey} />}
        />
        <Card
          title={"Public Key"}
          components={<WalletKey uniqKey={publicKey} />}
        />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title="Transactions" components={<MiniTransactionWidget/>} />
      </div>
    </div>
  );
}
