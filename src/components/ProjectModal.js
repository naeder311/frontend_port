import React, { useState } from 'react';
import { useProjectsContext } from '../contexts/context';
import { AiFillCloseCircle } from 'react-icons/ai';
import placeholder from '../assets/images/placeholder.png';

const ProjectModal = () => {
  const { closeModal, projects, id } = useProjectsContext();
  const [main, setMain] = useState();

  const project = projects.filter((item) => item.id === id);

  return (
    <div className="modal__container">
      {project.map((item) => {
        const {
          id,
          desc,
          image_one,
          image_two,
          image_three,
          image_four,
          image_five,
          link,
          title,
        } = item;

        return (
          <article className="modal__article">
            <div className="modal__article__main">
              <div className="modal__article__x" onClick={closeModal}>
                <AiFillCloseCircle />
              </div>
              <div className="modal__article__main--left " key={id}>
                <img
                  src={main || image_one}
                  alt=""
                  className="modal__article__main__left--img "
                />
              </div>
              <div className="modal__article__main__right">
                <div className="modal__article__main__right--desc">{desc}</div>
              </div>
            </div>
            <div className="modal__article__slide">
              <img
                src={image_one}
                alt=""
                className="modal__article__slide__img--1"
                onMouseOver={() => setMain(image_one)}
                onClick={() => setMain(image_one)}
              />
              <img
                src={image_two || placeholder}
                alt=""
                className="modal__article__slide__img--2"
                onMouseOver={() => setMain(image_two)}
                onClick={() => setMain(image_two)}
              />
              <img
                src={image_three || placeholder}
                alt=""
                className="modal__article__slide__img--3"
                onMouseOver={() => setMain(image_three)}
                onClick={() => setMain(image_three)}
              />
              <img
                src={image_four || placeholder}
                alt=""
                className="modal__article__slide__img--4"
                onMouseOver={() => setMain(image_four)}
                onClick={() => setMain(image_four)}
              />
              <img
                src={image_five || placeholder}
                alt=""
                className="modal__article__slide__img--5"
                onMouseOver={() => setMain(image_five)}
                onClick={() => setMain(image_five)}
              />
            </div>
            <div className="modal__button">
              <button className="btn btn__left" onClick={closeModal}>
                back
              </button>
              <button className="btn">
                <a href={link} target="_blank " rel="noopener noreferrer">
                  go to {title}
                </a>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProjectModal;
