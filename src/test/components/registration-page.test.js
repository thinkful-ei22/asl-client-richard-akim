import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationPage } from '../../components/registration/registration-page';


describe('<RegistrationPage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<RegistrationPage />);
  });
});