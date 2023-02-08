import "./App.css";
import Header from "./components/Home/Header.jsx";
import Advantages from "./components/Home/Advantages.jsx";
import Components from "./components/Home/Components.jsx";
import Tabs from "./components/Home/Tabs.jsx";
import About from "./components/Home/About.jsx";
import "./styles/index.scss";
import Products from "./components/Home/Products";
import Registration from "./components/Home/Registration";
import Footer from "./components/Home/Footer";
import Modal from "./components/Home/Modal";
import ModalSuccess from "./components/Home/ModalSuccess";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function toggleModals() {
    setIsOpen(false);
    setIsSuccessOpen(true);
  }

  function closeSuccess() {
    setIsSuccessOpen(false);
  }

  const escFunction = useCallback((event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    } else if (event.key === "Escape" && isSuccessOpen) {
      setIsSuccessOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />
      <Advantages />
      <Components />
      <Tabs />
      <About />
      <Products />
      <Registration />
      <Footer />
      {isOpen && <Modal setIsOpen={setIsOpen} toggleModals={toggleModals} />}
      {isSuccessOpen && <ModalSuccess setIsSuccessOpen={setIsSuccessOpen} />}
    </div>
  );
}

export default App;
