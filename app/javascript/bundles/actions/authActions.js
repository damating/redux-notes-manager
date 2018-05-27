import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //  If request is good
        //  - Update state to indicate user is authenticated
        //  - Save the JWD token
        //  - Redirect to the route '/notes'
        browserHistory.push('/notes');
      })
      .catch(() => {
        //  If request is bad
        // - Show an error to the user
      });
  }
}
