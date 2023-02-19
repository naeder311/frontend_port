import React from 'react';

import { Link } from 'react-router-dom';
import {
  FaBootstrap,
  FaCcStripe,
  FaCodepen,
  FaCss3,
  FaGitSquare,
  FaHtml5,
} from 'react-icons/fa';
import video from '../assets/images/video1.mp4';

const Header = () => {
  return (
    <section className="header">
      <div class="bg-video">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="header__leftside">
        <div className="header__leftside__grid">
          <nav className="tech">
            <i className="tech--1">
              <FaBootstrap />
            </i>
            <i className="tech--2">
              <FaCcStripe />
            </i>
            <i className="tech--3">
              <FaCodepen />
            </i>
            <i className="tech--4">
              <FaCss3 />
            </i>
            <i className="tech--5">
              <FaGitSquare />
            </i>
            <i className="tech--6">
              <FaHtml5 />
            </i>
          </nav>
          <h1 className="header__leftside__grid--1">
            From<span>front</span>
            of the classroom
          </h1>

          <div className="header__leftside__grid--2">
            <h1>
              <span>Chris</span>Naeder
            </h1>
          </div>
          <h1 className="header__leftside__grid--3">
            to
            <span>front</span>
            end web developer
          </h1>
          <div>
            <Link
              to="/contact"
              type="button"
              className="btn header__leftside__grid__btn"
            >
              <h3 className="header__leftside__grid__btn--text">Contact Me</h3>
            </Link>
            <a
              href="https://drive.google.com/file/d/1O6GhBj23z6BUOyiVTECVfNuo16Gyi-Or/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn header__leftside__grid__btn"
            >
              <h3 className="header__leftside__grid__btn--text">Resume</h3>
            </a>
            <a
              href="https://github.com/naeder311"
              target="_blank"
              rel="noreferrer"
              className="btn header__leftside__grid__btn"
            >
              <h3 className="header__leftside__grid__btn--text">Github</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__info">
          <h1 className="header__right__info--main">
            Hello, I'm Chris, a former elementary special education teacher. I
            am now a junior web developer looking to work with an amazing team.
          </h1>
          <div className="header__right__info--look">
            Take a look at my responsive portfolio. If you have any constructive
            feed back, let me know!
          </div>
          <div className="header__right__info--tech">
            Technologies used for this portfolio:
          </div>
          <ul className="header__ul">
            <li>React</li>
            <li>React-router-dom</li>

            <li>Node-sass</li>
            <li>Emailjs</li>
            <li>React-icons</li>
            <li>Django-Rest-API</li>
            <li>Postgresql AWS RDS</li>
            <li>AWS S3</li>
            <li>No bootstrap utilized</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
