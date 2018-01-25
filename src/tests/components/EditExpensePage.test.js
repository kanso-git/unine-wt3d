import React from 'react';
import { shallow } from 'enzyme';
import wt3ds from '../fixtures/wt3ds';
import { EditWt3dPage } from '../../components/EditWt3dPage';

let startEditWt3d, startRemoveWt3d, history, wrapper;

beforeEach(() => {
  startEditWt3d = jest.fn();
  startRemoveWt3d = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditWt3dPage
      startEditWt3d={startEditWt3d}
      startRemoveWt3d={startRemoveWt3d}
      history={history}
      expense={wt3ds[2]}
    />
  );
});

test('should render EditWt3dPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditWt3d', () => {
  wrapper.find('Wt3dForm').prop('onSubmit')(wt3ds[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditWt3d).toHaveBeenLastCalledWith(wt3ds[2].id, wt3ds[2]);
});

test('should handle startRemoveWt3d', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveWt3d).toHaveBeenLastCalledWith({
    id: wt3ds[2].id
  });
});
