import * as types from '../../actions/actionTypes';
import * as articleData from '../mock/articleData';
import * as articleActions from '../../actions/articleActions';

describe('article actions', () => {
  it('dispatches UPDATE_REACTION:::previously like now disliked', () => {
    const article = articleData.articleResponse.data.data;
    const store = mockStore({ articles: { article } });
    const expectedDispatches = [{
      payload: {
        myReactions: [{ reaction: -1 }],
        reactionCount: { dislikes: 6, likes: 4 },
      },
      type: types.UPDATE_REACTION,
    }];

    return store.dispatch(articleActions.react(article.slug, -1)).then(() => {
      expect(store.getActions()).toEqual(expectedDispatches);
    });
  });
  it('dispatches UPDATE_REACTION:::previously disliked now liked', () => {
    const article = articleData.articleResponse.data.data;
    const store = mockStore({ articles: { article: { ...article, myReactions: [{ reaction: -1 }] } } });
    const expectedDispatches = [{
      payload: {
        myReactions: [{ reaction: 1 }],
        reactionCount: { dislikes: 4, likes: 6 },
      },
      type: types.UPDATE_REACTION,
    }];

    return store.dispatch(articleActions.react(article.slug, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedDispatches);
    });
  });
});
