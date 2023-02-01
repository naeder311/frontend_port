import { useState, useEffect } from 'react';
import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Customers = () => {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  const getCustomers = async () => {
    try {
      const response = await fetch(
        'https://chrisnaederportfolio.herokuapp.com/api/customers/'
      );
      const data = await response.json();
      setPeople(data);
    } catch (error) {}
  };

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slidebar = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slidebar);
    };
  }, [index]);

  return (
    <div className="section">
      <section className="customer__section">
        <div className="customer__section__title">
          <h2 className="customer__section__title--text">testimonials</h2>
        </div>
        <div className="customer__section__center">
          {people.map((person, personIndex) => {
            const { name, location, message, avatar } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={personIndex}>
                <img
                  src={avatar}
                  alt={name}
                  className="customer__section__center__image"
                />
                <h4 class="customer__section__center__name">{name}</h4>
                <p class="customer__section__center__location">{location}</p>
                <p class="customer__section__center__message">
                  {message.substring(0, 150)} ...
                </p>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <BiLeftArrow />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <BiRightArrow />
          </button>
        </div>
      </section>
    </div>
  );
};
export default Customers;
