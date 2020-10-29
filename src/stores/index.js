import { createStore, applyMiddleware, compose  } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "../reducers";
import mySaga from "../sagas";
import { routerMiddleware } from 'connected-react-router';
import { history } from '../services/history';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function reduxStore(initialState) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require("../reducers"); // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}

export default reduxStore;
