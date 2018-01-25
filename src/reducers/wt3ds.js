// wt3ds Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_WT3D':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_WT3D':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_WT3D':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case 'SET_WT3DS':
      return action.wt3ds;
    default:
      return state;
  }
};
