import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddWt3d,
  addWt3d,
  editWt3d,
  startEditWt3d,
  removeWt3d,
  startRemoveWt3d,
  setWt3ds,
  startSetWt3ds
} from '../../actions/wt3ds';
import wt3ds from '../fixtures/wt3ds';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  wt3ds.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/wt3ds`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeWt3d({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_WT3D',
    id: '123abc'
  });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = wt3ds[2].id;
  store.dispatch(startRemoveWt3d({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_WT3D',
      id
    });
    return database.ref(`users/${uid}/wt3ds/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense action object', () => {
  const action = editWt3d('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_WT3D',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = wt3ds[0].id;
  const updates = { amount: 21045 };
  store.dispatch(startEditWt3d(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_WT3D',
      id,
      updates
    });
    return database.ref(`users/${uid}/wt3ds/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addWt3d(wt3ds[2]);
  expect(action).toEqual({
    type: 'ADD_WT3D',
    expense: wt3ds[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddWt3d(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_WT3D',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/wt3ds/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddWt3d({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_WT3D',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`users/${uid}/wt3ds/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

test('should setup set expense action object with data', () => {
  const action = setWt3ds(wt3ds);
  expect(action).toEqual({
    type: 'SET_WT3DS',
    wt3ds
  });
});

test('should fetch the wt3ds from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetWt3ds()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_WT3DS',
      wt3ds
    });
    done();
  });
});
