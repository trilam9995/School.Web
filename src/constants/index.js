const PAGE_INDEX = 0;
const PAGE_SIZE = 10;
const ROWS_PER_PAGE = 5;
const URL_BOT = "https://api.voximplant.com/";
const API_KEY_BOT = "f17dd10d-1f6e-4c54-bd48-0866100bdf3e";
const API_URL = process.env.REACT_APP_API_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;
const LOGOUT_URL =
  "https://dps-spd-identity-sso-dev.azurewebsites.net/connect/endsession?id_token_hint=";
const ACCOUNT_ID = "3717183";

export {
  PAGE_INDEX,
  PAGE_SIZE,
  ROWS_PER_PAGE,
  URL_BOT,
  API_KEY_BOT,
  API_URL,
  LOGIN_URL,
  LOGOUT_URL,
  ACCOUNT_ID,
};
