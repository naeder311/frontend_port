import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <section>
      <article className="contact__container">
        <ContactForm />
        <ContactInfo />
      </article>
    </section>
  );
};

export default Contact;
