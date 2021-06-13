import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import PostList from "./components/Reddit/PostList";
import RedditChartbar from "./components/Reddit/RedditChartbar";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";
import BalanceView from "./components/Binance/Portfolio";

function App() {
    return (
        <div className="App">
            {/* <PostList ticker="BTC" /> */}
            <HomePage/>
            {/* <Spinner/> <RedditChartbar/> */}
            <BalanceView/>
        </div>
    );
}

export default App;
