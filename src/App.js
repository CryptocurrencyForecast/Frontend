import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import PostList from "./components/Reddit/PostList";
import RedditChartbar from "./components/Reddit/RedditChartbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page404 from "./components/404/404";

function App() {
  return (
    <div className="App">
      {/* <PostList ticker="BTC" /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/antoine">
            <HomePage />
          </Route>
          <Route path="/pierre">
            <RedditChartbar />
          </Route>
            <Route>
                <Page404/>
            </Route>
        </Switch>
      </BrowserRouter>

      {/* <Spinner/> <RedditChartbar/> */}
    </div>
  );
}

export default App;
