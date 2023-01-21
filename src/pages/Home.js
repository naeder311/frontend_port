import React from 'react';
import Header from '../components/Header';
import Projects from './Projects';
import Customers from '../components/Customers';
import ContactMe from '../components/ContactMe';
import About from './About';

const Home = () => {
  return (
    <main className="container">
      <div className="container__area">
        <Header />
        <Projects />
        <Customers />
        <About />
        <ContactMe />
      </div>
    </main>
  );
};

export default Home;
