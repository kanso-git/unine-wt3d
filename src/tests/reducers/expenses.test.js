import expensesReducer from '../../reducers/wt3ds';
import wt3ds from '../fixtures/wt3ds';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_WT3D',
    id: wt3ds[1].id
  };
  const state = expensesReducer(wt3ds, action);
  expect(state).toEqual([wt3ds[0], wt3ds[2]]);
});

test('should not remove wt3ds if id not found', () => {
  const action = {
    type: 'REMOVE_WT3D',
    id: '-1'
  };
  const state = expensesReducer(wt3ds, action);
  expect(state).toEqual(wt3ds);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_WT3D',
    expense
  };
  const state = expensesReducer(wt3ds, action);
  expect(state).toEqual([...wt3ds, expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_WT3D',
    id: wt3ds[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(wt3ds, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_WT3D',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(wt3ds, action);
  expect(state).toEqual(wt3ds);
});

test('should set wt3ds', () => {
  const action = {
    type: 'SET_WT3DS',
    wt3ds: [wt3ds[1]]
  };
  const state = expensesReducer(wt3ds, action);
  expect(state).toEqual([wt3ds[1]]);
});
