import {API_BASE_URL} from '../utils/db-constants'
import { get, post } from './http-service';


/**
 * Creates a new project
 * @param {String} title, description, imgUrl, amount, createdAt, isDetete The title of the project
 * @param {String} description The description of the project
 * @param {String} imgUrl The imageU url of the project
 * @param {Number} amount The amount of the project
 * @param {Boolean} isDetete Is the project deleted
 * @param {Date} createdAt The date of the project creation
 */
export const AddProject = (data) => {
  
  const endpoint = `${API_BASE_URL}/projects.json`;
  
  const response = post(endpoint, data);
  
  return response;
};

/**
 * Get collection of projects
 * @name GetAllProjects
 * @param {Number|String} limit Get only first N entries
 */
export const GetAllProjects = (limit = 10) => {
  try {
    const endpoint = `${API_BASE_URL}/projects.json?&limit=${limit}`;
    const response = get(endpoint);

    return response;
  } catch (ex) {
    console.log(ex);
  }
};
