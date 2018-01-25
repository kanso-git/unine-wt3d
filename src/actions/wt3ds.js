
// ADD_WT3D
export const addWt3d = (expense) => ({
  type: 'ADD_WT3D',
  expense
});

export const startAddWt3d = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/wt3ds`).push(expense).then((ref) => {
      dispatch(addWt3d({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_WT3D
export const removeWt3d = ({ id } = {}) => ({
  type: 'REMOVE_WT3D',
  id
});

export const startRemoveWt3d = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/wt3ds/${id}`).remove().then(() => {
      dispatch(removeWt3d({ id }));
    });
  };
};

// EDIT_WT3D
export const editWt3d = (id, updates) => ({
  type: 'EDIT_WT3D',
  id,
  updates
});

export const startEditWt3d = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/wt3ds/${id}`).update(updates).then(() => {
      dispatch(editWt3d(id, updates));
    });
  };
};

// SET_WT3DS
export const setWt3ds = (wt3ds) => ({
  type: 'SET_WT3DS',
  wt3ds
});

export const startSetWt3ds = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/wt3ds`).once('value').then((snapshot) => {
      const wt3ds = [];

      snapshot.forEach((childSnapshot) => {
        wt3ds.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setWt3ds(wt3ds));
    });
  };
};
