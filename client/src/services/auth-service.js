//import config from '../utils/config';
import { storageKey } from '../utils/constants';
import {API_AUTH_BASE_URL, API_KEY} from '../utils/db-constants'

const __setUser = (userData) => {
    if (!userData) {
        localStorage.removeItem(storageKey);
    } else {
        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
};

const __getStorage = (key) => {
    const storage = localStorage.getItem(key);
    if (!storage) return undefined;
     
    const storageJson = JSON.parse(storage);
    return storageJson;
}

/**
 * Get localStorage user data by given property key
 * @param {String} key The property name
 */
export const getUserProp = (key) => {
    const storage = __getStorage(storageKey);

    return storage[key];
}

/**
 * Updates a given property in localStorage user data
 * @name updateUserProp
 * @param {String} key storage property to update
 * @param {*} updateData The data which to be set
 */
export const updateUserProp = (key, updateData) => {
    const storage = __getStorage(storageKey);

    if (storage) {
        const storagePropToUpdate = storage[key];
        let updatedStorage = null;

        if (Array.isArray(storagePropToUpdate)) {
            updatedStorage = [...storagePropToUpdate, updateData];
        } else {
            updatedStorage = updateData;
        }

        storage[key] = updatedStorage;

        localStorage.setItem(storageKey, JSON.stringify(storage));
    }
};

/**
 * Check for set token into localStorage
 * @name hasTokenSet
 * @returns {Boolean} hasTokenSet
 */
export const hasTokenSet = () => {
    const token = getToken();
    const hasTokenSet = token !== undefined && token !== null;

    return hasTokenSet;
}

/**
 * Get localStorage stored API token
 * @name getToken 
 */
export const getToken = () => {
    const storage = __getStorage(storageKey);

    return storage ? storage.idToken : undefined;
};

/**
 * 
 * @param {String} email
 * @param {String} password
 */
export const register = async (email, password) => {
    const endpoint = `${API_AUTH_BASE_URL}/accounts:signUp?key=${API_KEY}`; // /account/register`;
    const headers = {'Content-Type': 'application/json'};
    const body = { email, password };

    const response = await fetch(endpoint, { body: JSON.stringify(body), method: 'POST', headers });
    const json = response.json();
    
    return json;
};

/**
 * 
 * @param {String} email 
 * @param {String} password 
 */
export const login = async (email, password) => {
    const endpoint = `${API_AUTH_BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`;//`${config.apiBaseUrl}/account/login`;
    const headers = {'Content-Type': 'application/json'};
    const body = { email, password };
    
    const response = await fetch(endpoint, { body: JSON.stringify(body), method: 'POST', headers });
    const json = await response.json();
    
    __setUser(json);

    return json;
};

export const logout = () => {
  __setUser(null);
};