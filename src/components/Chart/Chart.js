import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Chart = ({
    symbol
}) => {
  return (
    <TradingViewWidget
    symbol={symbol}
    theme={Themes.DARK}
    locale="fr"
    autosize
  />
  );
};

export default Chart;
