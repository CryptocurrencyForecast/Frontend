import React from "react";

const Balance = ({asset, balance,value}) => {
    return (
        <div>
            <p>{asset}</p>
            <p>{balance}</p>
            <p>{value}</p>
        </div>
    );
};

export default Balance;