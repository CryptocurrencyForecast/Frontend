import React from "react";
import TechnicalReview, {
  THEMES,
  INTERVALS,
} from "react-tradingview-technical-analysis";

const TechnicalAnalysis = ({ symbol }) => {
  return (
    <TechnicalReview
      symbol={symbol}
      colorTheme={THEMES.DARK}
      interval={INTERVALS.ONE_WEEK}
    />
  );
};

export default TechnicalAnalysis;
