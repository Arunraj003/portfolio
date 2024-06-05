import React from 'react';
import { Container } from 'react-bootstrap';
import html from '../Assets/img/html.png';
import css from '../Assets/img/css.png';
import js from '../Assets/img/js.png';
import react from '../Assets/img/react.png';
import vscode from '../Assets/img/vscode.png';
import sql from '../Assets/img/sql.png';
import java from '../Assets/img/java.png';
import '../components/skills.css';

const Skills = () => {
  return (
    <Container id="skills" className="mt-5 pt-5 text-center">
      <h2>Skills</h2>
      <div className="skills-container p-2">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <img className="skill-img" src={html} alt="HTML" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img className="skill-img" src={css} alt="CSS" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img className="skill-img" src={js} alt="JavaScript" />
        </a>
        <a href="https://www.java.com/en/">
          <img className="skill-img" src={java} alt="Java" />
        </a>
        <a href="https://react.dev/">
          <img className="skill-img" src={react} alt="React" />
        </a>
        <a href="https://code.visualstudio.com/">
          <img className="skill-img" src={vscode} alt="VSCode" />
        </a>
        <a href="https://www.w3schools.com/sql/">
          <img className="skill-img" src={sql} alt="SQL" />
        </a>
      </div>
    </Container>
  );
};

export default Skills;
