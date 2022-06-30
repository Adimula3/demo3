import logo from './logo.svg';
import './App.css';
import NavMenu from "./component/Navmenu";
import Hero from "./pages/hero";
import Process from "./pages/process";
function App() {
  return (
    <div className="App">
      <NavMenu />
        <Hero />
        <Process />
    </div>
  );
}

export default App;
