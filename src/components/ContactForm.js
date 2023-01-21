import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import email from '../assets/images/email.svg';
import { useNavigate, Link } from 'react-router-dom';

const ContactInfo = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_avcz8bq',
        'template_63q28po',
        form.current,
        '2dwZKMTk260yx_UqK'
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate('/');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact__form">
      <div className="contact__form__title">
        get in touch <br />{' '}
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact__form__name">
          <div className="contact__form__name--name">
            <label className="contact__form__label">Name:</label>
            <br />
            <input type="text" name="user_name" />
          </div>
          <div className="contact__form__name--email">
            <label className="contact__form__label">Email:</label>
            <br />
            <input type="email" name="user_email" />
          </div>
        </div>
        <div className="contact__form__msg">
          <label className="contact__form__label">Message:</label>
          <br />
          <textarea name="message" />
          <input
            type="submit"
            value="Send"
            className="contact__form__btn btn"
          />
          <Link to="/" className="btn">
            back
          </Link>
        </div>
      </form>
      <div>
        <img src={email} alt="" className="contact__form__img" />
      </div>
    </section>
  );
};

export default ContactInfo;
