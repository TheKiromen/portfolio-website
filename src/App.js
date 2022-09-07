import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import {useRef} from "react";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <About/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
