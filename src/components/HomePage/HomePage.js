import React, { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../Spinner/Spinner";
import Coin from "../Coin/Coin";
import axios from "axios";
import { If } from "react-if";
import "./HomePage.scss";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      trackPromise(
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((res) => {
            setCoins(res.data);
            setLoading(false);
          })
          .catch((error) => console.error(error))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
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
              <th className="col rank">
                <div>#</div>
              </th>
              <th className="col name">
                <div>Nom</div>
              </th>
              <th className="col currency">
                <div>Devise</div>
              </th>
              <th className="col value">
                <div>Valeur</div>
              </th>
              <th className="col mktcap">
                <div>Market Cap</div>
              </th>
              <th className="col percent">
                <div>% de changement (24h)</div>
              </th>
              <th className="col see-more">
                <div>Voir plus</div>
              </th>
            </tr>
          </thead>
          <tbody className={`${loading ? "active" : ""}`}>
            <If condition={loading}>
              <tr>
                <td>
                  <Spinner />
                </td>
              </tr>
            </If>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  rank={coin.market_cap_rank}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
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
