import React, { useState, useEffect } from "react";
import Coin from "../Coin/Coin";
import axios from "axios";
import "./HomePage.scss";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="coin-table">
        <table rules="none">
          <thead>
            <tr>
              <th className="col name">
                <div>Nom</div>
              </th>
              <th className="col currency">
                <div>Devise</div>
              </th>
              <th className="col value">
                <div>Valeur</div>
              </th>
              <th className="col name">
                <div>Nom</div>
              </th>
              <th className="col percent">
                <div>% de changement</div>
              </th>
              <th className="col name">
                <div>Nom</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.total_volume}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
