import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import PostList from "./components/Reddit/PostList";
import RedditChartbar from "./components/Reddit/RedditChartbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinPage from "./components/CoinPage/CoinPage";
import Page404 from "./components/404/404";
import BalanceView from "./components/Binance/Portfolio";
import Wallet from "./components/Binance/Wallet";

function App() {
  return (
    <div className="App">
      {/* <PostList ticker="BTC" /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
            <RedditChartbar />
          </Route>
          <Route exact path="/crypto/:id" component={CoinPage} />
          <Route exact path="/portfolio" component={BalanceView} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
