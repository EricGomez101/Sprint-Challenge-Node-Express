import axios from 'axios';
export const GETPROJECTS = 'GETPROJECTS';

export const getProjects = () => {
  const promise = axios.get('http://localhost:5000/api/projects');
  return dispatch => {
    promise
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
