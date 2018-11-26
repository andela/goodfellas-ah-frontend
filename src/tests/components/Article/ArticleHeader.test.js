import React from 'react';
import { shallow } from 'enzyme';
import ArticleHeader from '../../../components/article/ArticleHeader';

const setup = () => {
  const props = {
    article: {
      read_time: '1 minutes',
      user: {
        firstname: '',
        lastname: '',
        profile: { image: '' },
      },
      title: 'thhisimage',
    },
  };

  const enzymeWrapper = shallow(<ArticleHeader {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('ArticleHeader component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
