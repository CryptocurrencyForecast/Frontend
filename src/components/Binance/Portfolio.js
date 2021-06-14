import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../Spinner/Spinner";
import Balance from "./Balance";

function BalanceView({
  token = "UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBMXVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3",
}) {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    trackPromise(
      axios
        .get("https://cryptocurrencyforecast.herokuapp.com/balance/" + token)
        .then((res) => {
          setBalances(res.data);
        })
        .catch((error) => console.log(error))
    );
  }, []);

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
          'rgba(43, 195, 43,1)',
          'rgba(255, 159, 64,1)',
          'rgba(255, 205, 86,1)',
          'rgba(75, 192, 192,1)',
          'rgba(54, 162, 235,1)',
          'rgba(153, 102, 255,1)',
          'rgba(201, 203, 207,1)'
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
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
      <div className="portfolio-graph">
        <div className="portfolio-graph__container">
          <Spinner />
          <Doughnut className="portfolio-doughnut" data={data}/>
        </div>
      </div>
    </div>
  );
}

export default BalanceView;
