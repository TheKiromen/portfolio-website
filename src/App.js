import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import * as React from "react";
import Projects from "./Projects";
import {useRef} from "react";

function App(){
    //Ref variables
    let refs = new Array();
    refs["About"]=useRef();
    refs["Projects"]=useRef();
    refs["Contact"]=useRef();

    //JSX code
    return (
        <div className="App">
            <Navbar refs={refs}/>
            <About ref={refs["About"]}/>
            <Projects ref={refs["Projects"]}/>
            <Contact ref={refs["Contact"]}/>
        </div>
    );
}

export default App;
