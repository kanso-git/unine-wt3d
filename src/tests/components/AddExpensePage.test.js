import React from 'react';
import { shallow } from 'enzyme';
import { AddWt3dPage } from '../../components/AddWt3dPage';
import wt3ds from '../fixtures/wt3ds';

let startAddWt3d, history, wrapper;

beforeEach(() => {
  startAddWt3d = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddWt3dPage startAddWt3d={startAddWt3d} history={history} />);
});

test('should render AddWt3dPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('Wt3dForm').prop('onSubmit')(wt3ds[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddWt3d).toHaveBeenLastCalledWith(wt3ds[1]);
});
