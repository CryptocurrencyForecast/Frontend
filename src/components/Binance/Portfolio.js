import React, { useState, useEffect } from "react";
import axios from "axios";
import Balance from "./Balance";

function BalanceView({
  c_token = "UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBMXVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3",
}) {
  const [balances, setBalances] = useState([]);
  const [token, setToken] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/balance/" + token)
      .then((res) => {
        setBalances(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="balance-list">
      {balances.map((balance) => {
        return (
          <div>
            <div>
              <form className="wallet-form">
                <input
                  type="text"
                  placeholder="API key"
                  className="api-key"
                  value="UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBM"
                />
                <input
                  type="text"
                  placeholder="API secret"
                  className="api-secret"
                  value="XVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3"
                />
              </form>
            </div>
            <Balance asset={balance.asset} balance={balance.free} />
          </div>
        );
      })}
    </div>
  );
}

export default BalanceView;
