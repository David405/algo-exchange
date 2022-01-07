import React from "react";
import "./walletKey.css";
export function WalletKey(props) {
  let { uniqKey = "No keys provided" } = props;
  return (
    <div className="input-group mb-3 walletKey">
      <input
        type="password"
        className="form-control"
        placeholder={uniqKey}
        aria-label="private-key"
        aria-describedby="private-key"
        value={uniqKey}
        disabled
      />
      <div className="input-group-append">
        <span
          className="input-group-text"
          id="wallet-key"
          onClick={toggleHidden}
        >
          View
        </span>
      </div>
    </div>
  );
}
function toggleHidden(e) {
  try {
    var t = e.target
    var x = e.target.parentElement.previousElementSibling
    if (x.type === "password") {
      x.type = "text";
      t.innerHTML = 'Hide'
    } else {
      x.type = "password";
      t.innerHTML = 'View'
    }
  } catch (error) {
    console.log('Somthing went wrong when try to unhide password')
    console.log(error)
  }
}
