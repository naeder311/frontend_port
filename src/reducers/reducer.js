import {
  MODAL_OPEN,
  MODAL_CLOSE,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_SUCCESS,
} from '../actions';

const projectsReducer = (state, action) => {
  if (action.type === MODAL_OPEN) {
    return { ...state, modal_open: true, id: action.payload };
  }
  if (action.type === MODAL_CLOSE) {
    return { ...state, modal_open: false };
  }
  if (action.type === GET_PROJECTS_SUCCESS) {
    return { ...state, projects: action.payload };
  }
  if (action.type === GET_PROJECT_SUCCESS) {
    return { ...state, single_projects: action.payload };
  }
  return state;
};

export default projectsReducer;
