import React from 'react';
import pic from '../assets/images/headshot.jpg';

const About = () => {
  return (
    <section className="about__container">
      <div className="about__info">
        <div className="about__info__heading">programming journey</div>
        <div className="about__info__body">
          How I developed my skills after teaching:
          <br />
          <span>
            <br />
            <ul>
              <li>Udemy -React Tutorial and Projects course by John Smilga</li>
              <li>Udemy -Advanced CSS and SASS by Jonas Schmedtmann</li>
              <li>
                Udemy -Mastering Regular Expressions in JavaScript by Steven
                Hancock
              </li>
              <li>
                Udemy -Testing React with Jest and React Testing Library (RTL)
                by Bonnie Schulkin
              </li>
              <li>Harvardx CS50W Web Programming with Python and Javascript</li>
              <li>Completing Javascript & JQuery by Jon Duckett</li>
              <li>Completing Python Crash Course by Eric Matthes</li>
              <li>Reading technology docs</li>
              <li>Having a mentor that is a SVP of Engineering</li>
              <li>
                Following several developers on Medium such as Addy Osmani,
                Lydia Hallie, Paul Irish
              </li>
              <li>
                Following youtube's developedbyed - super duper entertaining
              </li>
              <li>
                Currently working on unit testing with Jest and React Testing
                Library by Bonnie Schulkin
              </li>
            </ul>
          </span>
          <br />
          Having a solid foundation in learning and research has helped me
          understand what and how to use the technologies and to understand what
          is happening behind the scenes. I am up for any challenge given and
          would love to work with you on your next project.
          {/* <ul>
            <li className="about__info__body--1">Self taught programmer</li>
            <li className="about__info__body--2">
              MAsters in Teaching K-6 <br />
              with special education cert
            </li>
            <li className="about__info__body--4">
              studied jujitsu for 12 years
            </li>
            <li className="about__info__body--5">rec volleyball</li>
            <li className="about__info__body--6">
              tradeshow account manager
              <br />
              multi-million $ accounts
            </li>
            <li className="about__info__body--7">
              Managed Magnum icecream and <br />
              st. ives popup stores in NYC
            </li>
            <li className="about__info__body--8">been to CES 4 times</li>
          </ul> */}
        </div>
      </div>
      <div className="about__img__container">
        <img src={pic} alt="" className="about__img" />
        <div className="about__img__overlay"></div>
      </div>
    </section>
  );
};

export default About;
