import React from "react";

const Balance = ({asset, balance}) => {
    return (
        <div>
            <p>{asset}</p>
            <p>{balance}</p>
        </div>
    );
};

export default Balance;
