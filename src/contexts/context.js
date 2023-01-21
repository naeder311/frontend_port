import React, { useEffect, useReducer, createContext, useContext } from 'react';

import reducer from '../reducers/reducer';
import {
  MODAL_OPEN,
  MODAL_CLOSE,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_SUCCESS,
} from '../actions';

const initialState = {
  modal_open: false,
  projects: [],
  single_project: {},
  modal_id: 0,
};

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (id) => {
    dispatch({ type: MODAL_OPEN, payload: id });
  };
  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        'https://chrisnaederportfolio.herokuapp.com/api/sites'
      );
      const projects = await response.json();
      dispatch({ type: GET_PROJECTS_SUCCESS, payload: projects });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSingleProject = async () => {
    try {
      const response = await fetch(
        'https://chrisnaederportfolio.herokuapp.com/api/sites'
      );
      const project = await response.json();
      dispatch({ type: GET_PROJECT_SUCCESS, payload: project });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProjects('https://chrisnaederportfolio.herokuapp.com/api/sites');
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ ...state, fetchSingleProject, openModal, closeModal }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};
