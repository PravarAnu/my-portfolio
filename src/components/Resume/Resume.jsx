import "./Resume.css";
import Header from "./components/Header";
import CareerObjective from "../Resume/components/CareerObjective";
import EducationalDetails from "./components/EducationalDetails";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import SoftSkills from "./components/SoftSkills";
import Interests from "./components/Interests";
import Languages from "./components/Languages";
import PersonalDetails from "./components/PersonalDetails";

export default function Resume() {
    return (
        <div className="main">
            <div className="resume">

                <Header />
                <div className="main-content">
                    <CareerObjective />
                    
                    <div className="wrapper">
                        <EducationalDetails/>
                        <Skills/>
                        <Experience/>
                        <Projects/>
                        <Achievements/>
                        <SoftSkills/>
                        <Interests/>
                        <Languages/>
                        <PersonalDetails/>
                    </div>

                </div>
            </div>

        </div>
    );
}