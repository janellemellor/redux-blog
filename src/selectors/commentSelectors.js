import { getPostByIndex } from '../selectors/postSelectors';

export const getCommentsByPost = (state, index) => {
    const comments =  getPostByIndex(state, index).comments;
    console.log(comments);
    return comments;
};
