import React from "react";
import "./Coin.scss";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <tr className="coin-row">
      <td className="coin-image">
        <div>
          <img src={image} alt="crypto" />
          <div className="name">{name}</div>
        </div>
      </td>
      <td className="coin-image">
        <div>{symbol}</div>
      </td>
      <td className="coin-image">
        <div>${price}</div>
      </td>
      <td className="coin-image">
        <div>${volume.toLocaleString()}</div>
      </td>
      {priceChange < 0 ? (
        <td className="coin-percent red">
          <div>{priceChange.toFixed(2)}%</div>
        </td>
      ) : (
        <td className="coin-percent green">
          <div>{priceChange.toFixed(2)}%</div>
        </td>
      )}
      <td className="coin-image">
        <div>Mkt Cap: ${marketCap.toLocaleString}</div>
      </td>
    </tr>
  );
};

export default Coin;
