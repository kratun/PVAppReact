const {
    NODE_ENV,
    PUBLIC_URL,
    REACT_APP_API_BASE_URL,
  } = process.env;
  
  /**
   * Application config including environment variables
   * @name config
   * @type {Object}
   */
  const config = {
    env: NODE_ENV,
    apiBaseUrl: REACT_APP_API_BASE_URL,
    publicUrl: PUBLIC_URL,
  };
  
  export default config;