import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import RedditChartbar from "./components/Reddit/RedditChartbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CoinPage from "./components/CoinPage/CoinPage";
import Page404 from "./components/404/404";
import React from "react";
import ButtonAppBar from "./components/Header/Navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ButtonAppBar/>
                        <HomePage/>
                    </Route>
                    <Route exact path="/crypto/:id" render={(props) =>
                        <React.Fragment>
                            <CoinPage {...props}/>
                        </React.Fragment>
                    }
                    />
                    <Route component={Page404}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
