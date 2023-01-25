import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section>
      <Link to="/">
        <button className="btn back__button">Back</button>
      </Link>
      <article className="contact__container">
        <ContactForm />
        <ContactInfo />
      </article>
    </section>
  );
};

export default Contact;
