import { ADD_POST, addPost, DELETE_POST, deletePost } from './postActions';

describe('post actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'Blogs are better than pogs',
      body: 'This is my post about why blogs are better than pogs'   
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'Blogs are better than pogs',
        body: 'This is my post about why blogs are better than pogs'  
      }
    });
  });
  
  it('it deletes a post action', () => {
    const action = deletePost(4);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 4
    });
  });
  
    
});

