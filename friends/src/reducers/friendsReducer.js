import { LOAD_FRIENDS, GOT_FRIENDS, ADDING_FRIEND, FRIEND_ADDED, ERROR } from '../actions';

let initialState =
{
    fetchingFriends: false,
  adiingFriend: false,
  deletingFriend: false,
    friends: [],
    error: null
  }

  export const friendsReducer = (state = initialState, action) => {
      switch(action.type){
          case LOAD_FRIENDS:
          return{...state, fetchingFriends:true};
          case GOT_FRIENDS:
          return{...state,friends:action.payload,fetchingFriends: false};
          case ADDING_FRIEND:
          return{...state, addingFriend:true};
          case FRIEND_ADDED:
          return{...state, friends:action.payload, addingFriend:false};
          case ERROR:
          return{
            ...state,
            error: action.payload
          };
          default:
          return state;
      }
  };