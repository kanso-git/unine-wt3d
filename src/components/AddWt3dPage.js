import React from 'react';
import { connect } from 'react-redux';
import Wt3dForm from './Wt3dForm';
import { startAddWt3d } from '../actions/wt3ds';


export class AddWt3dPage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddWt3d(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add new waytouch</h1>
          </div>
        </div>
        <div className="content-container">
          <Wt3dForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddWt3d: expense => dispatch(startAddWt3d(expense)),

});


export default connect(undefined, mapDispatchToProps)(AddWt3dPage);
