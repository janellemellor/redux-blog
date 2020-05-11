import { ADD_POST, addPost } from './postActions';

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
    
});

