import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/butterfly.jpg" alt="butterfly" className="avatar" />;
}

function Intro() {
  return (
    <>
      <h3>Jonas Schmedtmann</h3>
      <br></br>
      <p>
        Full-stack web developer and teacher at Udemy When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the portugese sun at the beach.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill skillObj={skillObj} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <p>{skillObj.skill}</p>
      {skillObj.level === "advanced" ? <span>💪</span> : ""}
      {skillObj.level === "beginner" ? <span>🧑</span> : ""}
      {skillObj.level === "intermediate" ? <span>🙎‍♂️</span> : ""}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
