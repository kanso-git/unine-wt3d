import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectWt3ds from '../selectors/wt3ds';
import selectWt3dsTotal from '../selectors/wt3ds-total';

export const Wt3dsSummary = ({ expenseCount }) => {
  const expenseWord = expenseCount === 1 ? 'waytouch' : 'waytouchs';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Waytouch</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleWt3ds = selectWt3ds(state.wt3ds, state.filters);

  return {
    expenseCount: visibleWt3ds.length,
    expensesTotal: selectWt3dsTotal(visibleWt3ds)
  };
};

export default connect(mapStateToProps)(Wt3dsSummary);
