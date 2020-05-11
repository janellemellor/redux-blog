import { addPost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('handles the add post action', () => {
    const state = [];
    const action = addPost({
        title: 'Blogs are better than pogs',
        body: 'This is my post about why blogs are better than pogs' 
    });

    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        title: 'Blogs are better than pogs',
        body: 'This is my post about why blogs are better than pogs'   
      }
    ]);
  });  
})
