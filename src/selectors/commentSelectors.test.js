import { getCommentsByPost } from '../selectors/commentSelectors';

describe('comment selectors', () => {
  it('gets all comments by post', () => {
    const state = [
        {
          title: 'Popcorn and beer',
          body: 'is an acceptable dinner choice any night of the week',
          comments: ['Yes! 100% agree!','Popcorn and beer is all I need']
          }
    ];
    const comments = getCommentsByPost(state, 0)
    expect(comments).toEqual(
        ['Yes! 100% agree!','Popcorn and beer is all I need']
    );
  });  
});
