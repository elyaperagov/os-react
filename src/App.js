import "./App.css";
import Header from "./components/Home/Header.jsx";
import Advantages from "./components/Home/Advantages.jsx";
import Components from "./components/Home/Components.jsx";
import Tabs from "./components/Home/Tabs.jsx";
import About from "./components/Home/About.jsx";
import "./styles/index.scss";
import Products from "./components/Home/Products";
import Registration from "./components/Home/Registration";

function App() {

  return (
    <div className="App">
      <Header />
      <Advantages />
      <Components />
      <Tabs />  
      <About /> 
      <Products />  
      <Registration />  
    </div>
  );
}

export default App;
