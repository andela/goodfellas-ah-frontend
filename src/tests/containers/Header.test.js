import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ArticleHeader, { Header } from '../../components/shared/Header';
import Root from '../../root';

let wrapped;
let wrapper;
let wrapperHeader;
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
    />,
  );

  wrapperHeader = shallow(
    <Header
      parentComponent="notlandingpage"
      auth={authTest.auth.authenticated}
    />,
  );
});

afterEach(() => wrapped.unmount());

describe('Header UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
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
