

import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/login/login-page';


describe('<LoginPage />', () => {
  it('should render without crashing', () => {
   
    const wrapper = shallow(<LoginPage/>);
  });
});