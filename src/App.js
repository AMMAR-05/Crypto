import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="home_screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coins" element={<Coins />}>
            <Route path=":id" element={<Coin />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
