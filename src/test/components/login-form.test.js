/* global jest */

import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../components/login/login-form';


describe('<LoginForm/>', () => {
  it('should render without crashing', () => {
    const mock = jest.fn()
    const wrapper = shallow(<LoginForm handleSubmit={mock}/>);
  });
});