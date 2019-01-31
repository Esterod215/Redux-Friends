import axios from 'axios';

export const ERROR ='ERROR';
export const LOAD_FRIENDS ='LOADING_FRIENDS';
export const GOT_FRIENDS ='GOT_FRIENDS';
export const ADDING_FRIEND ='ADDING_FRIEND';
export const FRIEND_ADDED ='FRIEND_ADDED';

const URL = 'http://localhost:5000/api/friends';

export const getFriends = () => {
    axios
    .get(`${URL}/get`);
    return dispatch => {
      dispatch({ type: LOAD_FRIENDS })
      
        .then(response => {
          dispatch({ type: GOT_FRIENDS, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };

  export const addFriend = () => {
     axios.post(`${URL}/create`);
    return dispatch => {
      dispatch({ type: ADDING_FRIEND })
        .then(response => {
          dispatch({ type: FRIEND_ADDED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };
