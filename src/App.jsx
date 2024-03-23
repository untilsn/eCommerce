import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Banner from "./modules/homepage/Banner";

function App() {
  const { authModal } = useSelector((state) => state.auth);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
