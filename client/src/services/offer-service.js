import {API_BASE_URL} from '../utils/db-constants'
import { get, post, put } from './http-service';


/**
 * Creates a new project
 * @param {String} title, description, imgUrl, amount, createdAt, isDetete The title of the project
 * @param {String} description The description of the project
 * @param {String} imgUrl The imageU url of the project
 * @param {Number} amount The amount of the project
 * @param {Boolean} isDetete Is the project deleted
 * @param {Date} createdAt The date of the project creation
 */
export const AddOffer = (data) => {
  
  const endpoint = `${API_BASE_URL}/offers.json`;
  
  const response = post(endpoint, data);
  
  return response;
};

/**
 * Get collection of projects
 * @name GetAllProjects
 * @param {Number|String} limit Get only first N entries
 */
export const GetAllOffers = (limit = 10) => {
  try {
    const endpoint = `${API_BASE_URL}/offers.json?&limit=${limit}`;
    const response = get(endpoint);

    return response;
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * Get project detailed information
 * @name getRestaurantDetails
 * @param {String} id The id of the project
 */
export const GetOfferDetails = (id) => {
  try {
    const endpoint = `${API_BASE_URL}/offers/${id}.json`;
    const response = get(endpoint);
  
    return response;
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * Edit project
 * @param {String} title The title of the edited project
 * @param {String} description The description of the edited project
 * @param {String} imgUrl The imageU url of the edited project
 * @param {Number} amount The amount of the edited project
 * @param {Boolean} isDeteted Is the project deleted
 * @param {Date} createdAt The date of the project creation
 * @param {String} id The id of the edited project
 */
export const EditOffer = (data, id) => {
  
  const endpoint = `${API_BASE_URL}/offers/${id}.json`;
  
  const response = put(endpoint, data);
  
  return response;
};
