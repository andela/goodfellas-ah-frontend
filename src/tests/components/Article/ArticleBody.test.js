import React from 'react';
import { shallow } from 'enzyme';
import ArticleBody from '../../../components/article/ArticleBody';

const setup = () => {
  const props = {
    article: { authorId: 1, image: 'thhisimage', body: 'somerandombody' },
    userId: 1,
  };

  const enzymeWrapper = shallow(<ArticleBody {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('ArticleBody component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
