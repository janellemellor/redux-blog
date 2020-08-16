import { getPosts, getPostByIndex } from '../selectors/postSelectors';

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


  it('gets a post by index', () => {
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
    
    const post = getPostByIndex(state, 1);
    expect(post).toEqual({
        title: 'Popcorn and beer',
        body: 'is an acceptable dinner choice any night of the week'  
    });
  });
});


