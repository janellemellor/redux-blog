import { ADD_POST } from '../actions/postActions';

//   * store an array of posts
//   * handle create a post
//   * handle delete a post
//   * BONUS: handle update a post by index

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}