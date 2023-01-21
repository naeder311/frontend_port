import React from 'react';
import { useProjectsContext } from '../contexts/context';

const Project = ({
  id,
  link,
  title,
  desc,
  image_one,
  image_two,
  image_three,
  image_four,
  image_five,
  modalHandle,
}) => {
  const { openModal } = useProjectsContext();
  return (
    <div className="project">
      <div className="project__side project__side__front">
        <img
          src={image_one}
          alt={title}
          className="project__side__front__img"
        />
        <div className="project__side__front__title">{title}</div>
        <button className="project__side__front__title--btn">
          <a href={link} target="_blank " rel="noopener noreferrer">
            visit {title}
          </a>
        </button>
      </div>
      <div className="project__side project__side__back">
        <h1 className="project__side__back__title">{title}</h1>
        <p className="project__side__back__desc">{desc.substring(0, 100)}...</p>
        <button
          className="project__side__back__btn"
          type="button"
          onClick={() => openModal(id)}
        >
          take a peak
        </button>
      </div>
    </div>
  );
};

export default Project;
