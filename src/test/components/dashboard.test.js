/* global jest */

import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from '../../components/dashboard/dashboard';

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    const testUser = {name:'test'};
    const mock = jest.fn();
    const wrapper = shallow(<Dashboard currentUser={testUser} dispatch={mock}/>);
  });
});