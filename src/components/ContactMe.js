import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactMe = () => {
  return (
    <section>
      <article className="contact__container">
        <ContactForm />
        <ContactInfo />
      </article>
    </section>
  );
};

export default ContactMe;
