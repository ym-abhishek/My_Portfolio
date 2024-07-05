import "./project.css";
import React from "react";
import project_num from "../images/number_guess.webp";
import pro_login from "../images/reg.jpg";
import pro_port from "../images/portfolio.jpg";
import pro_pw from "../images/password manager.png";
import pro_cipher from "../images/cipher.jpg";
import cool_music from "../images/Music.jpeg";
import glshoes from "../images/shoes.jpg";
import quess_game from "../images/question quess.jpg"
import move_it from "../images/Move it.jpeg"
import elite_cart from "../images/Elite Cart.png"

export default function MyProjects() {
  return (
    <>
      <div className="project-con">
        <h1>My Projects</h1>
        <div className="project-block">
          <div className="my-projects">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro_port} alt="portfolio" />
              <h3>Portfolio Webpage</h3>
            </a>
          </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/ym-abhishek-Login-Reg-User-Data_Management/Login%20page.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro_login} alt="portfolio" />
                <h3>Log Reg Page</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Elite-Soles/GLSports.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={glshoes} alt="GLSports" />
                <h3>GLSports</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Password-Generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro_pw} alt="password generator" />
                <h3>Password Generator</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Caesar_Cipher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro_cipher} alt="Caesar Cipher" />
                <h3>Caesar Cipher</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Number_guessing_game.py"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project_num} alt="number guessing game" />
                <h3>Number Guessing Game</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Cool-Music-Player.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cool_music} alt="Music Player" />
                <h3>Cool Music Player</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Cool-Music-Player.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={quess_game} alt="Quess Game" />
                <h3>Quess Game</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Delivery_Website_Using_Bootsrap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={move_it} alt="Moveit" />
                <h3>Moveit</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Elite-E-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={elite_cart} alt="Elite Cart" />
                <h3>Elite Cart</h3>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
