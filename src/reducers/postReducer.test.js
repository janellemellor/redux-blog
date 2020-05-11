import { addPost, deletePost } from '../actions/postActions';
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


  it('handles the delete post post action', () => {
    const state = [
      {
        title: 'Blogs are better than pogs',
        body: 'This is my post about why blogs are better than pogs'
      }
    ];

    const action = deletePost(0);
    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });  

});
