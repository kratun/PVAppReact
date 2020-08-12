//import { getToken } from './auth-service';

/**
 * Do GET request
 * @param {String} endpoint 
 * @param {Object} options 
 */
export const get = (endpoint, options = {}) => {
    return __doRequest('GET', endpoint, null, options);
};

/**
 * Do POST request
 * @param {String} endpoint 
 * @param {Any} data 
 * @param {Object} options 
 */
export const post = (endpoint, data, options = {}) => {
    return __doRequest('POST', endpoint, data, options);
};

/**
 * Do PUT request
 * @param {String} endpoint 
 * @param {Any} data 
 */
export const put = (endpoint, data, options = {}) => {
    return __doRequest('PUT', endpoint, data, options);
};

/**
 * Do delete request
 * @param {String} endpoint 
 */
export const del = (endpoint) => {
    return __doRequest('DELETE', endpoint);
};

// TODO: Implement error handling for this generic method
const __doRequest = async (method, endpoint, data = null, opt = {}) => {
    
    const headers = {'Content-Type': 'application/json' };//,  'Authorization': `Bearer ${getToken()}`};
    const options = { ...opt, method, headers, };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(endpoint, options);
    const json = await response.json();
    
    return json;
};