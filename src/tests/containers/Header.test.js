
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ArticleHeader, { Header } from '../../components/shared/Header';
import Root from '../../root';

let wrapped;
let wrapper;
let wrapperHeader;
let mountHeader;
let authFalseHeader;
const auth = {
  auth: {
    authenticated: true,
  },
};

const authTest = {
  auth: {
    authenticated: false,
  },
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <ArticleHeader />
      </MemoryRouter>
    </Root>,
  );

  wrapper = shallow(
    <Header
      parentComponent="landingpage"
      auth={auth.auth.authenticated}
      profile={{ image: 'testImageUrl' }}
    />,
  );

  wrapperHeader = shallow(
    <Header
      parentComponent="notlandingpage"
      auth={authTest.auth.authenticated}
    />,
  );

  mountHeader = mount(
    <MemoryRouter>
      <Header
        parentComponent="notlandingpage"
        auth={auth.auth.authenticated}
        profile={{ image: 'testImageUrl' }}
      />
    </MemoryRouter>,
  );

  authFalseHeader = mount(
    <MemoryRouter>
      <Header
        parentComponent="notlandingpage"
        auth={authTest.auth.authenticated}
        profile={{ image: 'testImageUrl' }}
      />
    </MemoryRouter>,
  );
});

afterEach(() => wrapped.unmount());
describe('Loading', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

test('Header functionality', () => {
  const inst = wrapper.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

test('Header functionality', () => {
  const inst = wrapperHeader.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

it('should click more articles button', () => {
  mountHeader.find('.dropdown-click').simulate('click');
  mountHeader.find('.search-click').simulate('click');
  mountHeader.find('.search-click').simulate('click');
});

it('should toggle navbar', () => {
  authFalseHeader.find('.navbar-toggler').simulate('click');
  authFalseHeader.find('.navbar-toggler').simulate('click');
});

it('should toggle searchbar', () => {
  mountHeader.find('.searchbar-toggle').simulate('click');
  mountHeader.find('.searchbar-toggle').simulate('click');
});
