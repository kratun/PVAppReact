import {API_BASE_URL} from '../utils/db-constants'
import { post } from './http-service';


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
