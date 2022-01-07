import React from "react";
import './walletData.css'
export function WalletData(props) {
  return (
    <div className="input-group mb-3">
      <input
        name={props.name}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={props.value}
        readOnly
      />
      <div className="input-group-append">
        <span
          className="input-group-text"
          id="basic-addon1"
          onClick={copyText}
          data-toggle="tooltip"
          data-placement="bottom"
          title="click to copy"
        >
          <i aria-hidden="true" className="fas fa-fw fa-clipboard" />
        </span>
      </div>
    </div>
  );
}
function copyText(e) {
  try {
    var textBox = e.target.parentElement.parentElement.previousElementSibling;
    if (textBox.value != "") {
      textBox.select();
      document.execCommand("copy");
    }
  } catch (error) {
      console.log(error)
  }
}

// TODO hide copy span except generate wallet has been clicked on
