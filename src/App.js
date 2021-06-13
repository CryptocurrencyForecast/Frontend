import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import PostList from "./components/Reddit/PostList";
import RedditChartbar from "./components/Reddit/RedditChartbar";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className="App">
      {/* <PostList ticker="BTC" /> */}
      <HomePage />
      <RedditChartbar />
    </div>
  );
}

export default App;
