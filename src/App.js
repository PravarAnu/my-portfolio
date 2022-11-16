import Projects from "./components/Project/Projects";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
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

export default App;
