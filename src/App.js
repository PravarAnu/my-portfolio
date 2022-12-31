import Projects from "./components/Project/Projects";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import AllProjects from "./components/Project/AllProjects"
import {Routes, Route} from "react-router-dom";

function Home(){
    return (
        <div>
            <Header/>
            <Intro/>
            <div className="gradient"></div>
            <Projects/>
            <div className="gradient"></div>
            <Contact/>
            <div className="gradient"></div>
            <Footer/>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="resume" element = { <Resume/> } />
                <Route path="projects" element = { <AllProjects/> } />
            </Routes>
        </div>
    );
}

export default App;
