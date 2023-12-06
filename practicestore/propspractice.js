import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="HTML + CSS" backgroundColor="blue" />
      <Skill skill="JavaScript" backgroundColor="yellow" />
      <Skill skill="Web Design" backgroundColor="green" />
      <Skill skill="Git and GitHub" backgroundColor="red" />
      <Skill skill="React" backgroundColor="lightblue" />
      <Skill skill="Svelte" backgroundColor="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.skill}
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/emoji/48/thumbs-up.png"
        alt="thumbs-up"
      />
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
