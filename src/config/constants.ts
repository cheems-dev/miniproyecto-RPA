// Mini Proyecto RPA Digital constants

export const platform = "WEB";

const CONSTANTS = {
  // HTML title tag text
  TITLE: "Mini Proyecto RPA Digital",
  // General settings
  // Routing
  ROUTES: {
    // Router where the user will land initially to check authentication
    ENTRY_PATH: "/",
    SIGN_USER: "/login",
  },

  API: {
    REACT_APP_API_URL: import.meta.env.VITE_APP_API_URL,
    VITE_APP_API_TOKEN: import.meta.env.VITE_APP_API_TOKEN,
    REACT_APP_API_AUTH_URL: import.meta.env.VITE_APP_API_AUTH_URL,
    REACT_APP_PLATFORM: "WEB",
    // Mock services, change to false if you don't want to mock
    MOCK_SERVICES: false,
    // TODO: If true a registered user with address, billing data and orders will be present
    MOCK_WITH_INITIAL_USER_DATA: false,
    // Default max waiting time for a request reply
    DEFAULT_REQUEST_TIMEOUT: 30000,
    // Excluded status codes that should not be logged
    EXCLUDED_LOGGER_STATUS_CODES: [422],
    // Included environments that should be logged
    INCLUDED_LOGGER_ENVS: ["dev", "production"],
  },
  // CSS Break Points
  BREAKPOINTS: {
    mobile: 420,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
    hd: 2560,
  },
  // Time format
  FORMAT: "mm:ss",
  INTERVAL: 1000,
  INITIAL_TIME: 5 * 1000 * 60,
};

export default CONSTANTS;
