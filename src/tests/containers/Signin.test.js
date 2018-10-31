import React from 'react';
import { mount } from 'enzyme';

import Signin from '../../containers/Signin';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Signin />);
});

afterEach(() => wrapped.unmount());

it('has two input fields and a button', () => {
  expect(wrapped.find('input').length).toEqual(2);
  expect(wrapped.find('button').length).toEqual(1);
});
