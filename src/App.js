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
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  function toggleModals() {
    setIsOpen(false)
    setIsSuccessOpen(true)
  }

  function closeSuccess() {
    setIsSuccessOpen(false)
  }
  
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
      {isSuccessOpen && <ModalSuccess closeSuccess={closeSuccess} />}
    </div>
  );
}

export default App;
