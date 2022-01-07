import React from "react";
import { Button } from "../../elements";
import { WalletData } from "../../elements/input/walletData";
export default function WalletGenerator(props) {
    const {address,privateKey} = {address: props.wallet.address, privateKey: props.wallet.privateKey}
  return (
    <>
      <WalletData
        name="walletAddress"
        placeholder="click the generate wallet button"
        value={address}
      />
      <WalletData
        name="walletSecretKey"
        placeholder="click the generate wallet button"
        value={privateKey}
      />

      <Button
        onClick={props.generateAlgoWallet}
        label={"generate wallet"}
        className="button_btn__31WCE button_btn_primary__YxAPp"
      />
    </>
  );
}
