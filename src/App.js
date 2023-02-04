import './App.css';
import Contact from './components/Home/Contact.jsx';
import Header from './components/Home/Header.jsx';
import Advantages from './components/Home/Advantages.jsx';
import Components from './components/Home/Components.jsx';
import Tabs from './components/Home/Tabs.jsx';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <Advantages />
        <Components />
        <Tabs />
        <Contact />
    </div>
  );
}

export default App;
