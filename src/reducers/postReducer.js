import { ADD_POST, DELETE_POST } from '../actions/postActions';

//   * handle delete a post
//   * BONUS: handle update a post by index

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((_, i) => i !== action.payload);  
    default:
      return state;
  }
}