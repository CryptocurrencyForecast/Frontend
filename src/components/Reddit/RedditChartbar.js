import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import axios from "axios";
import {trackPromise} from "react-promise-tracker";
import Spinner from "../Spinner/Spinner";
import "./Reddit.scss";

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

function RedditChartbar() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        trackPromise(
            axios
                .get("https://cryptocurrencyforecast.herokuapp.com/trending-currencies")
                .then((res) => {
                    setCryptos(res.data);
                })
                .catch((error) => console.error(error))
        );
    }, []);

    let labels = [];
    let redditPosts = [];
    cryptos.sort((a, b) => b[2] - a[2]);
    cryptos.map((crypto) => labels.push(crypto[0]));
    cryptos.map((crypto) => redditPosts.push(crypto[2]));

    const data = {
        labels: labels,
        datasets: [
            {
                label: "# Posts on Reddit",
                data: redditPosts,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="description block">
                <div className="description__content">
                    <p>This graph shows the Reddit activity of the top 8 cryptocurrencies on the <a href="https://www.reddit.com/r/CryptoCurrency/"><b>/CryptoCurrency</b></a> thread for the last 24h.</p>
                </div>
            </div>
            <div className="coin-graph">
                <div className="coin-graph__container">

                    <Spinner/>
                    <Bar className="reddit-bar-chart" data={data} options={options}/>
                </div>
            </div>
        </div>
    );
}

export default RedditChartbar;
