import React from 'react';
import { connect } from 'react-redux';
import Wt3dListItem from './Wt3dListItem';
import selectWt3ds from '../selectors/wt3ds';

export const Wt3dList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">wt3ds</div>
      <div className="show-for-desktop">Wt3d</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.wt3ds.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No wt3ds</span>
          </div>
        ) : (
            props.wt3ds.map(wt3d => <Wt3dListItem key={wt3d.id} {...wt3d} />)
          )
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  wt3ds: selectWt3ds(state.wt3ds, state.filters),
});

export default connect(mapStateToProps)(Wt3dList);
