import React, { Component } from 'react';
import TodoApp from './components/todoApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    let store = createStore(todoApp);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/:filter" component={TodoApp} />
            <Route path="/" component={TodoApp} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
