import './Assets/Styles/App.css';
import Navbar from "./Components/Menu/Navbar";
import About from "./Components/Content/About/About";
import Contact from "./Components/Footer/Contact";
import * as React from "react";
import Projects from "./Components/Content/Projects/Projects";
import {useRef} from "react";
import InteractiveBanner from "./Components/Content/InteractiveBanner";

function App(){
    //Ref variables
    let refs = [];
    refs["About"]=useRef();
    refs["Projects"]=useRef();
    refs["Contact"]=useRef();

    //JSX code
    return (
        <div className="App">
            <Navbar refs={refs}/>
            <InteractiveBanner/>
            <About ref={refs["About"]}/>
            <Projects ref={refs["Projects"]}/>
            <Contact ref={refs["Contact"]}/>
        </div>
    );
}

export default App;
