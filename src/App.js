import { Routes, Route } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <div>
      <Navbar />

      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coins" element={<Coins />}>
            <Route path=":id" element={<Coin />} />
          </Route>
        </Routes>
      </>

      <Footer />
    </div>
  );
}

export default App;
