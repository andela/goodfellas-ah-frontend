import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../containers/App';
import LandingPage from '../../views/LandingPage';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Card from '../../containers/ArticleCard';
import '../../styles/styles.scss';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <App>
      <LandingPage />
    </App>,
  );
});

afterEach(() => wrapped.unmount());

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains the header', () => {
  expect(wrapped.contains(Header)).toEqual(true);
});

it('contains a footer', () => {
  expect(wrapped.contains(Footer)).toEqual(true);
});

it('contains Cards', () => {
  expect(wrapped.contains(Card)).toEqual(true);
});
