import Modal from "./modules/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/modules/home/About";
import About from "./modules/about/About";
import "./App.css";
import Footer from "./components/footer/Footer";
import DataProvider from "./components/DataProvider";
import Shop from "./modules/shop/Shop";
import Contact from "./modules/contact/Contact";
import { Provider } from "react-redux";
import { store } from "./modules/redux/Store";
import CountBtn from "./modules/counter/CountBtn";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar></Navbar>
        <CountBtn></CountBtn>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </DataProvider>

        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
