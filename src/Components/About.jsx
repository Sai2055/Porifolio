import { useState } from "react";
import Profile from "../Components/profile";
import Projects from "../Components/Projects";
import Skill from "../Components/Skill";
import Education from "../Components/Education";
export default function About() {
  const [profileState, setProfileState] = useState(false);
  const [projectState, setProjectState] = useState(false);
  const [skillState, setskillState] = useState(false);
  const [eduState, setEduState] = useState(false);

  function handlepro() {
    setProfileState(!profileState);
  }
  function handleproject() {
    setProjectState(!projectState);
  }
  function handleskill() {
    setskillState(!skillState);
  }
  function handleEdu() {
    setEduState(!eduState);
  }

  return (
    <div className="About-page">
      <div>
        <div onClick={handlepro} className="profile-btn">
          Profile
        </div>
        <div>{profileState ? <Profile /> : null}</div>

        <div onClick={handleproject} className="profile-btn">
          Projects
        </div>
        <div>{projectState ? <Projects /> : null}</div>

        <div onClick={handleskill} className="profile-btn">
          Skills
        </div>
        <div>{skillState ? <Skill /> : null}</div>

        <div onClick={handleEdu} className="profile-btn">
          Education
        </div>
        <div>{eduState ? <Education /> : null}</div>
      </div>
    </div>
  );
}
