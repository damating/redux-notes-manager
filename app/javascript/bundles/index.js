import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import SignIn from './components/auth/SignIn';
import NotesPage from './components/NotesPage';
import reducers from './reducers/index';

const createStoreWithMiddleware = railsProps =>
  createStore(reducers, railsProps, applyMiddleware(reduxThunk));

// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const NoteApp = props => {
  const store = createStoreWithMiddleware({ notes: props.notes.data });

  return (
    <Provider store={store}>
     <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/notes" component={NotesPage} />
        </div>
      </Router>
    </Provider>
  );
};

export default NoteApp;
