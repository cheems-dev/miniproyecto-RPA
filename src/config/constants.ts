// Kioscos Dashboard Project constants

export const platform = "WEB";

const CONSTANTS = {
  // HTML title tag text
  TITLE: "Mini Proyecto RPA Digital",
  // General settings
  // Routing
  ROUTES: {
    // Router where the user will land initially to check authentication
    ENTRY_PATH: "/",
    ADMIN_ENTRY_PATH: "/administratorPanel",
    // Router where the user will land if not authenticated
    NO_AUTH_PATH: "/",
    // admin panel
    ADMIN_PAYMENT_LIST: "/adminPaymentList",
    ADMIN_CLIENT_LIST: "/adminClientList",
    USER_PAYMENT_DETAILS: "/userPaymentDetails",
    USER_PAYMENT_LIST: "/userPaymentList",
    SETTINGS: "/settings",
    SIGN_USER: "/sign",
  },
  ACCOUNT_NUMBER: import.meta.env.VITE_ACCOUNT_NUMBER,
  CCI_ACCOUNT_NUMBER: import.meta.env.VITE_CCI_ACCOUNT_NUMBER,
  API: {
    REACT_APP_API_URL: import.meta.env.VITE_APP_API_URL,
    VITE_APP_API_TOKEN: import.meta.env.VITE_APP_API_TOKEN,
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
