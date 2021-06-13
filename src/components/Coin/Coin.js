import React from "react";
import "./Coin.scss";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Coin = ({ rank, name, image, symbol, price, volume, priceChange }) => {
  return (
    <tr className="coin-row">
      <td className="col coin-rank">
        <div>{rank}</div>
      </td>
      <td className="col coin-name">
        <div>
          <img src={image} alt="crypto" />
          <div className="name">{name}</div>
        </div>
      </td>
      <td className="col coin-currency">
        <div>{symbol}</div>
      </td>
      <td className="col coin-price">
        <div>${price}</div>
      </td>
      <td className="col coin-mktcap">
        <div>${volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
      </td>
      {priceChange < 0 ? (
        <td className="col coin-percent red">
          <div>{priceChange.toFixed(2)}%</div>
        </td>
      ) : (
        <td className="col coin-percent green">
          <div>+{priceChange.toFixed(2)}%</div>
        </td>
      )}
      <Link to={`/crypto/${symbol.toUpperCase()}`}>
        <td className="col coin-see-more">
          <div>
            <AddCircleOutlineIcon />
          </div>
        </td>
      </Link>
    </tr>
  );
};

export default Coin;
