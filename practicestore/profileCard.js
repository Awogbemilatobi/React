import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "purple",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "orangered",
  },
  {
    skill: "React",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "yellow",
  },
];

function App() {
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
  return <img src="butterfly.jpg" alt="" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at udemy, when not coding or
        preparing a course, I like to play board games, to cook, or to just
        enjoy the portugese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      <span>
        {skillObj.level === "beginner" && (
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/emoji/48/baby-emoji.png"
            alt="baby-emoji"
          />
        )}
        {skillObj.level === "intermediate" && (
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/emoji/48/thumbs-up.png"
            alt="thumbs-up"
          />
        )}
        {skillObj.level === "advanced" && (
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/triceps.png"
            alt="triceps"
          />
        )}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
