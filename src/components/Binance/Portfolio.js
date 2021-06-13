import React, { useState, useEffect } from "react";
import axios from "axios";
import Balance from "./Balance";

const BalanceView = () => {
  const [balances, setBalances] = useState([]);
  const [token, setToken] = useState({});

  const handleChangePartA = (e) => {
    setToken(e.target.value + token);
  };

  const handleChangePartB = (e) => {
    setToken(token + e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get("http://127.0.0.1:5000/balance/" + token)
      .then((res) => {
        setBalances(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="balance-list">
      <div>
        <div>
          <form onSubmit={handleSubmit} className="wallet-form">
            <input
              type="text"
              placeholder="API key"
              className="api-key"
              value="UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBM"
              onChange={handleChangePartA}
            />
            <input
              type="text"
              placeholder="API secret"
              className="api-secret"
              value="XVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3"
              onChange={handleChangePartB}
            />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BalanceView;
