import React from 'react';
import { shallow } from 'enzyme';
import { Wt3dsSummary } from '../../components/Wt3dsSummary';

test('should correctly render Wt3dsSummary with 1 expense', () => {
  const wrapper = shallow(<Wt3dsSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render Wt3dsSummary with multiple wt3ds', () => {
  const wrapper = shallow(<Wt3dsSummary expenseCount={23} expensesTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});
