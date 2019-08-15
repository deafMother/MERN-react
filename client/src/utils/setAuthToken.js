import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // add token
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    //remove token
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
