import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { API_KEY, MNEMONIC, URL, PRIVATE_KEY, PUBLIC_KEY } from "../../apis";
import { Card } from "../../components/elements/card";
import "./dashboard.css";
import WalletGenerator from "../../components/widgets/generateWallet";
import UserLedgerAcctCreator from "../../components/widgets/userLedgerAcctCreator";
import { TradeView } from "../../components/widgets/tradeView";
import { MiniTransactionWidget } from "../../components/widgets/transactions";


export function Dashboard(props) {
  const INITIAL_STATE = {address: '', privateKey: '' };
  const [wallet, setwallet] = useState(INITIAL_STATE);
  // The response from this has to be displayed on the interface
  const generateAlgoWallet = () => {
    const settings = {
      async: true,
      crossDomain: true,
      url: `${URL}/algorand/wallet?mnemonic=${MNEMONIC}`,
      method: "GET",
      headers: {
        "x-api-key": `${API_KEY}`
      }
    };
    $.ajax(settings).done(function(response) {  
      // TODO Bug: user have to click on the button twice for the state to change
      setwallet(prevState => ({
        address: JSON.stringify(response.address), 
        privateKey: JSON.stringify(response.secret),
        ...prevState.wallet  
      }));
      //update input
    });
  };

  // display on interface
  const createUserLedger = () => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `/ledger/account`,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-api-key": `${API_KEY}`
      },
      processData: false,
      data: `{\"currency\":\"ALGO\",\"xpub\":${PUBLIC_KEY},\"customer\":{\"accountingCurrency\":\"USD\",\"customerCountry\":\"US\",\"externalId\":\"123654\",\"providerCountry\":\"US\"},\"compliant\":false,\"accountCode\":\"AC_1011_B\",\"accountingCurrency\":\"USD\",\"accountNumber\":\"123456\"}`
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
      localStorage.setItem("customerId", JSON.stringify(response.customerId));
      localStorage.setItem("id", JSON.stringify(response.id));
    });
  }
  const tradeButtons = <div>
    <Link to="/trade" className="view-details">Buy</Link>
    <Link to="/trade" className="view-details" style={{marginTop: '15px', background: '#E54C67'}}>Sell </Link>
  </div>
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <div className="row">
        <div className="col-lg-12">
        {/* <Card title={"Trade Center"} components={<TradeView />} /> */}
        </div>
          <div className="col-lg-6">
            <Card
              title={"Generate Algorand Wallet"}
              components={
                <WalletGenerator generateAlgoWallet={generateAlgoWallet} wallet={wallet} />
              }
            />
          </div>
          <div className="col-lg-6">
            <Card
              title={"Create User Ledger Account"}
              components={
                <UserLedgerAcctCreator  createUserLedger={createUserLedger}/>
              }
            />
          </div>
        </div>
        {/* <Card components={tradeButtons} /> */}
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title="Transactions" components={<MiniTransactionWidget/>} />
      </div>
    </div>
  );
}
