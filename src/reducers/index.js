import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import messageBox from "./message-box";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    messageBox,
  });

export default createRootReducer;
