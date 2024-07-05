import React from "react";
import "./about.css";
import displaypicture from "../images/DP.png";
import HTML from "../images/HTML5-logo.png";
import CSS from "../images/CSS3-logo.png";
import JS from "../images/JavaScript-logo.png";
import Reactjs from "../images/React_logo.png";
import Python from "../images/Python-logo.png";
import Django from "../images/Django-Logo.png";
import MySQL from "../images/mysql.png";

export default function About() {
  return (
    <>
      <div className=".wrapper-about">
        <div className="container-about">
          <div className="main-about">
            <h1>
              About Me
              <hr />
            </h1>
            <p className="greeting">Hello,</p>
            <p className="name">I am <span>Y M Abhishek,</span></p>
            <p className="role">Passionate <span>Python Full Stack Developer</span> seeking a fresher role with expertise in Python, React and MySQL.</p> 
          </div>
          <div className="Display-Picture">
            <img src={displaypicture} alt="dp" />
          </div>
        </div>
        <div className="skills-section">
          <h2>Skills</h2>
          <hr />
          <div className="my-skills-grid">
            <div className="grid-item">
              <img src={HTML} alt="html-logo" /><br/>
              <p>HTML syntax and structure, text formatting, links and navigation, images and multimedia, 
              tables, forms and input.</p><br/>
                <progress min="0" max="100" value="90"></progress>
            </div>
            <div className="grid-item">
              <img src={CSS} alt="css-logo" /><br/>
              <p>Selectors, box model, flexbox, grid, transitions and animations, pseudo-classes and pseudo-elements, 
                media queries.</p>
              <progress min="0" max="100" value="90"></progress>
            </div>
            <div className="grid-item">
              <img src={JS} alt="js-logo" /><br/>
              <p>Functions, DOM manipulation, events and event handling, 
                arrays and objects, promises, async/await, AJAX and Fetch API, 
                ES6, error handling, modules and imports/exports.</p>
              <progress min="0" max="100" value="90"></progress>
            </div>
            <div className="grid-item">
              <img src={Reactjs} alt="react-logo" /><br/>
              <p>JSX syntax, components, props and state, lifecycle methods, hooks (useState, useEffect), 
                event handling, conditional rendering, lists and keys, forms and controlled components, 
                context API, routing, higher-order components.</p>
              <progress min="0" max="100" value="90"></progress>
            </div>
            <div className="grid-item">
              <img src={Python} alt="python-logo" /><br/>
              <p>Variables and data types, control structures, functions and modules, file handling, 
                error handling and exceptions, data structures, object-oriented programming, comprehensions, 
                generators and iterators.</p>
              <progress min="0" max="100" value="90"></progress>
            </div>
            <div className="grid-item">
              <img src={Django} alt="django-logo" /><br/>
              <p>Project structure, apps, models and ORM, views and templates, URL routing, forms, 
              authentication, static files, admin interface, migrations, deployment.</p><br/>
              <progress min="0" max="100" value="90"></progress>
            </div>
            <div className="grid-item">
              <img src={MySQL} alt="mysql-logo" /><br/>
              <p>Tables, data types, CRUD operations, SELECT statements, WHERE clause, 
                JOIN operations, GROUP BY and aggregation 
                functions, indexes (primary key, unique, composite), 
                constraints (foreign key, not null), transactions (commit, rollback), views.</p>
              <progress min="0" max="100" value="90"></progress>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
