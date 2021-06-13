import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import PostList from "./components/Reddit/PostList";
import RedditChartbar from "./components/Reddit/RedditChartbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinPage from "./components/CoinPage/CoinPage";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
