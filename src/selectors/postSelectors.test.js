import { getPosts } from '../selectors/postSelectors';
// * get all posts
// * get a post by index
// * STRETCH: create `src/selectors/commentSelectors.js`
// * get all comments by post

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = [
      {
        title: 'Blogs are better than pogs',
        body: 'This is my post about why blogs are better than pogs' 
      }, 
      {
        title: 'Popcorn and beer',
        body: 'is an acceptable dinner choice any night of the week'  
      }
    ];
    
    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'Blogs are better than pogs',
        body: 'This is my post about why blogs are better than pogs' 
        }, 
        {
        title: 'Popcorn and beer',
        body: 'is an acceptable dinner choice any night of the week'  
        }
    ]);
  });
  
  
});


