import React from 'react';
import { shallow } from 'enzyme';
import wt3ds from '../fixtures/wt3ds';
import Wt3dListItem from '../../components/Wt3dListItem';

test('should render Wt3dListItem correctly', () => {
  const wrapper = shallow(<Wt3dListItem {...wt3ds[0]} />);
  expect(wrapper).toMatchSnapshot();
});
