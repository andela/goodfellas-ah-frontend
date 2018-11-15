import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Search, { SearchArticlesContainer } from '../../containers/SearchArticles';
import Root from '../../root';

let wrapper;
// let wrapped;
let searchMount;
// let mockGetArticles;

const articles = {
  articles: {
    searchResults: {
      success: true,
      articles: [
        {
          favorited: null,
          favoritesCount: null,
          id: 2,
          slug: 'jake-peralta-is-an-idiot',
          title: 'Lorem ipsum, please teach me to right',
          description: 'Stressss',
          body: 'Do you know what the perimeter of the earth is? like the whole earth o, including the ocean? yh i don\'t know it either. ',
          image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541610101/v6secq0grmfsayjb22wt.jpg',
          tagList: null,
          read_time: '1 minute',
          averageRating: null,
          authorId: 1,
          createdAt: '2018-11-07T16:48:19.350Z',
          updatedAt: '2018-11-07T17:01:42.065Z',
          user: {
            firstname: 'Jeff',
            lastname: 'Britta',
            profile: {
              image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541609731/sa6kvtumxdmsdwyz9xcj.jpg'
            },
          },
          reactions: [
            {
              reaction: 1,
            },
            {
              reaction: 1,
            },
          ],
          comments: [],
        },
        {
          favorited: null,
          favoritesCount: null,
          id: 3,
          slug: 'horsin-around',
          title: 'Horsin\' around!',
          description: 'Stressss',
          body: 'Today, we have with us the star of the 90s show Horsin\' around. Bojack Horseman!. Hello Bojack. How is it going today? ',
          image: null,
          tagList: null,
          read_time: '1 minute',
          averageRating: null,
          authorId: 1,
          createdAt: '2018-11-07T16:48:43.392Z',
          updatedAt: '2018-11-07T16:48:43.392Z',
          user: {
            firstname: 'Jeff',
            lastname: 'Britta',
            profile: {
              image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541609731/sa6kvtumxdmsdwyz9xcj.jpg'
            },
          },
          reactions: [],
          comments: [],
        },
      ],
    },
  },
};
beforeEach(() => {
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <Search />
      </MemoryRouter>
    </Root>,
  );

  // mockGetArticles = jest.fn();
  // wrapped = shallow(
  //   <Card
  //     getArticles={mockGetArticles}
  //     articles={articles.articles.articles}
  //     error={articles.error}
  //   />,
  // );

  searchMount = mount(
    <SearchArticlesContainer
      articleResults={articles.articles.articles}
      errorResults={articles.error}
    />,
  );
});


afterEach(() => wrapper.unmount());

describe('Search Card UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});


describe('Article Card Functionality', () => {
  it('should sort articles', () => {
    const inst = searchMount.instance();
    console.log(inst);
    expect(inst).toBeInstanceOf(SearchArticlesContainer);
    expect(inst).not.toBeNull();
  });
});
//   it('should click more articles button', () => {
//     wrapperCard.find('.hero-moreArticles').simulate('click');
//     expect(mockGetArticles).toBeCalled();
//     wrapperCard.find('.hero-moreArticles').simulate('click');
//     expect(mockGetArticles).toBeCalled();
//   });
// });
