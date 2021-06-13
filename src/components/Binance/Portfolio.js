import React, { useState, useEffect } from "react";
import axios from "axios";
import Balance from "./Balance";

function BalanceView({token = "UimWOZ9hTGnsH1K2iIad65HcDCM0wMcvhpV8i7WzhxKyT17s3CDk4YLEZIsRJfBMXVtmEKyTUeP3hxw6xmWjWWWWf2DWPSgyQXxSFrrQMt3TjL8vYGryyjzLBiYfQYa3"}) {
    
    const [balances, setBalances] = useState([]);
    
    useEffect(() => {
        axios
            .get(
                "http://127.0.0.1:5000/balance/" + token
            )
            .then((res) => {
                setBalances(res.data);
            })
            .catch((error) => console.log(error));
    },[]);
    console.log(balances)

    return (
        <div className="balance-list">
            {balances.map((balance) => {
                return (
                    <Balance
                        asset={balance.asset}
                        balance={balance.free}
                    />)
            })}
        </div>
    );
}

export default BalanceView;
