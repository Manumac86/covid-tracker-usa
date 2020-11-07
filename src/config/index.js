/**
 * The config object for the env variables.
 *
 * @type {Object}
 */
const config = {
  dev: process.env.NODE_ENV !== 'production',
  apiUrl: process.env.REACT_APP_API_URL
};

module.exports = { config };