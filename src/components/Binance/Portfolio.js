import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../Spinner/Spinner";
import "./Binance.scss";

// Testnet token (Dummy network, not critical)
function BalanceView({
  token = "UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBMXVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3",
}) {
  const [balances, setBalances] = useState([]);
  const [tokenPartA, setTokenPartA] = useState("");
  const [tokenPartB, setTokenPartB] = useState("");

  let labels = [];
  let coins = [];
  balances.map((crypto) => labels.push(crypto["asset"]));
  balances.map((crypto) => coins.push(crypto["value"]));

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Portfolio",
        data: coins,
        backgroundColor: [
          "rgba(255, 99, 132,1)",
          "rgba(43, 195, 43,1)",
          "rgba(255, 159, 64,1)",
          "rgba(255, 205, 86,1)",
          "rgba(75, 192, 192,1)",
          "rgba(54, 162, 235,1)",
          "rgba(153, 102, 255,1)",
          "rgba(201, 203, 207,1)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    setTokenPartA(document.getElementById("coin-input-token-part-a").value);
    setTokenPartB(document.getElementById("coin-input-token-part-b").value);
  });

  const handleChangeA = (e) => {
    setTokenPartA(e.target.value);
  };

  const handleChangeB = (e) => {
    setTokenPartB(e.target.value);
  };

  const submitToken = () => {
    trackPromise(
      axios
        .get(
          `https://cryptocurrencyforecast.herokuapp.com/balance/${tokenPartA}${tokenPartB}`
        )
        .then((res) => {
          setBalances(res.data);
        })
        .catch((error) => {
          console.error(error);
          alert("La clé que vous avez fourni est incorrecte.");
        })
    );
  };

  return (
    <div>
      <div className="wallet-form">
        <h1>Portfolio report</h1>
      </div>
      <div className="portfolio-formulaire">
        {/* Test net keys (dummy network, not critical) */}
        <div className="input-part input-part__A">
          <div className="key">API KEY :</div>
          <input
            type="text"
            placeholder="API key"
            className="coin-input"
            id="coin-input-token-part-a"
            onChange={handleChangeA}
          />
          <div className="tip">
            Try this key :
            <span>
              UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBM
            </span>
          </div>
        </div>
        <div className="input-part input-part__B">
          <div className="key">API SECRET :</div>
          <input
            type="text"
            placeholder="API secret"
            className="coin-input"
            id="coin-input-token-part-b"
            onChange={handleChangeB}
          />
          <div className="tip">
            Try this key :
            <span>
              XVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3
            </span>
          </div>
        </div>
      </div>
      <button className="submit-button" onClick={submitToken}>
        Afficher le portfolio
      </button>
      <div className="portfolio-graph">
        <div className="portfolio-graph__container">
          <Spinner />
          <Doughnut
            className="portfolio-doughnut"
            data={data}
            options={{ radius: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default BalanceView;
