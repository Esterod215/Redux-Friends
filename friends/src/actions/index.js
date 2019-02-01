import axios from 'axios';

export const ERROR ='ERROR';
export const LOAD_FRIENDS ='LOADING_FRIENDS';
export const GOT_FRIENDS ='GOT_FRIENDS';
export const ADDING_FRIEND ='ADDING_FRIEND';
export const FRIEND_ADDED ='FRIEND_ADDED';

const URL = 'http://localhost:5000/api/friends';

// export const getFriends = () => dispatch => {
//     axios
//     .get(`${URL}/get`);
//       {
//       dispatch({ type: LOAD_FRIENDS })
      
//         .then(response => {
//           dispatch({ type: GOT_FRIENDS, payload: response.data });
//         })
//         .catch(err => {
//           dispatch({ type: ERROR, payload: err });
//         });
//     };
//   };

export const getFriends =() => dispatch =>{
  dispatch({type:LOAD_FRIENDS})
  return axios
  .get(URL)
  .then(res => {
    return dispatch({
      type:GOT_FRIENDS, payload: res.data
    })
  }).catch(err=>{
     return dispatch({type:ERROR,payload:err});
  })
}

  export const addFriend = (name,age,email) => dispatch =>{
    dispatch({ type: ADDING_FRIEND }) 
    return axios
    .post(URL, {name,age,email})
    .then(res => {
          return dispatch({ type: FRIEND_ADDED, payload: res.data });
        })
        .catch(err => {
          return dispatch({ type: ERROR, payload: err });
        });
    };
  
