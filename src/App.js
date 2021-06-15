import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import RedditChartbar from "./components/Reddit/RedditChartbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CoinPage from "./components/CoinPage/CoinPage";
import Page404 from "./components/404/404";
import React from "react";
import Navbar from "./components/Header/Navbar";
import BalanceView from "./components/Binance/Portfolio";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar/>
                        <div className="Content">
                            <HomePage/>
                        </div>
                    </Route>
                    <Route exact path="/crypto/:id" render={(props) =>
                        <React.Fragment>
                            <Navbar/>
                            <div className="Content">
                                <CoinPage {...props}/>
                            </div>
                        </React.Fragment>
                    }/>
                    <Route exact path="/reddit">
                        <Navbar/>
                        <div className="Content">
                            <RedditChartbar/>
                        </div>
                    </Route>
                    <Route exact path="/portfolio">
                        <Navbar/>
                    </Route>
                    <Route>
                        <Navbar/>
                        <Page404/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
