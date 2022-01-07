import React from "react";
import { Button } from "../../elements";
import { WalletData } from "../../elements/input/walletData";
export default function UserLedgerAcctCreator(props) {
  return (
    <>
    
      <WalletData
        name="walletSecretKey"
        placeholder="click the generate wallet button"
        value={'dsdsajgasbd8232'}
      />

      <Button
        onClick={props.createUserLedger}
        label={"create ledger"}
        className="button_btn__31WCE button_btn_primary__YxAPp"
      />
    </>
  );
}
