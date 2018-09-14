
/* global jest */

import React from 'react';
import { shallow } from 'enzyme';
import { QuestionPage } from '../../components/questions/question-page';


describe('<QuestionPage />', () => {
  it('should render without crashing', () => {
    const mock = jest.fn();
    const wrapper = shallow(<QuestionPage dispatch={mock}/>);
  });
});