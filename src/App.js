import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import configureStore from "./stores";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./services/history";
import { pathRoute } from "./routes/routes-main";
import NotFound from "./components/not-found";
import MessageBox from "./screens/message-box";
import Callback from "./components/callback";
import ChatMessage from "./components/chat-hub";

import Home from "./layouts/home";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MessageBox />
          <ConnectedRouter history={history}>
            <Switch>
              {/* <PrivateRoute exact path={"/"} component={Home} />
              <PrivateRoute path={pathRoute.home} component={Home} /> */}
              <Route path={pathRoute.callback} component={Callback} />
              <Route path={"/"} component={ChatMessage} />
              <Route path={pathRoute.chatMessage} component={ChatMessage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
