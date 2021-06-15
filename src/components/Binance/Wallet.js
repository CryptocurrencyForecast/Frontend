import React from "react";
import './Binance.scss'

const Wallet = () => {
  return (
    <div>
      <form className="wallet-form">
          <input
            type="text"
            placeholder="API key"
            className="api-key"
            value = "UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBM"
          />
          <input
            type="text"
            placeholder="API secret"
            className="api-secret"
            value = "XVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3"
          />
      </form>
    </div>
  );
};

export default Wallet;
