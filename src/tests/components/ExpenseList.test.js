import React from 'react';
import { shallow } from 'enzyme';
import { Wt3dList } from '../../components/Wt3dList';
import wt3ds from '../fixtures/wt3ds';

test('should render Wt3dList with wt3ds', () => {
  const wrapper = shallow(<Wt3dList wt3ds={wt3ds} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Wt3dList with empty message', () => {
  const wrapper = shallow(<Wt3dList wt3ds={[]} />);
  expect(wrapper).toMatchSnapshot();
});
