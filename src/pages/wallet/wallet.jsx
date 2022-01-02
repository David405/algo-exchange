import React, { useEffect } from 'react'
import { Card } from '../../components/elements/card'
export  function Wallet(params) {
    return (
        <div className="row">
            <div className="col-xl-8 col-lg-7">
                <Card title={"Balance"} components={'yes'}/>
                <Card title={"Private Key"} components={'yes'}/>
                <Card title={"Public Key"} components={'yes'}/>
                {/* balance component */}
                {/* private keys */}
                {/* public keys */}
            </div>
            <div className="col-xl-4 col-lg-5">
                <Card title={"Transactions"} components={'yes'}/>
                {/* transaction table */}
            </div>
        </div>
    )
    
};
