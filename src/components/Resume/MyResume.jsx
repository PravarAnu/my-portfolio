import "./MyResume.css";
import Header from "./Header";
import CareerObjective from "./CareerObjective";
import EducationalDetails from "./EducationalDetails";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import SoftSkills from "./SoftSkills";
import Interests from "./Interests";
import Languages from "./Languages";
import PersonalDetails from "./PersonalDetails";

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