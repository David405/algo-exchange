import React from "react";
import './walletKey.css'
export function WalletKey(props) {
  let {key = 'No keys provided'} = props
  return (
    <div className="input-group mb-3 walletKey">
      <input
        type="password"
        className="form-control"
        placeholder={key}
        aria-label="private-key"
        aria-describedby="private-key"
        value={key}
        disabled
      />
      <div className="input-group-append">
        <span className="input-group-text" id="wallet-key">
          View
        </span>
      </div>
    </div>
  );
}
