import { SERVER_URL } from 'react-native-dotenv';

export const LOGIN_REQUEST = 'loginRequest';
export const LOGIN_SUCCESS = 'loginSuccess';
export const LOGIN_FAILURE = 'loginFailure';
export const FORGOT_PASSWORD = 'forgotPassword';

const URL = `http://${SERVER_URL}/users/login`;

export function login(username, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { username: username, password: password }
      ),
    })
    .then((response) => dispatch({ type: LOGIN_SUCCESS, payload: response.token}))
    .catch((error) => dispatch({ type: LOGIN_FAILURE, payload: error }));
  };
}

export function forgotPassword(input) {
  return {
    type: FORGOT_PASSWORD,
    payload: input,
  };
}
