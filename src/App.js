import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import PostList from "./components/Reddit/PostList";

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <PostList ticker="BTC" /> */}
    </div>
  );
}

export default App;
