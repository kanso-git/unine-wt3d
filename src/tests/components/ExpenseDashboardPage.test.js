import React from 'react';
import { shallow } from 'enzyme';
import Wt3dDashboardPage from '../../components/Wt3dDashboardPage';

test('should render Wt3dDashboardPage correctly', () => {
  const wrapper = shallow(<Wt3dDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
