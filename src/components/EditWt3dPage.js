import React from 'react';
import { connect } from 'react-redux';
import Wt3dForm from './Wt3dForm';
import { startEditWt3d, startRemoveWt3d } from '../actions/wt3ds';

export class EditWt3dPage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditWt3d(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveWt3d({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Wt3d</h1>
          </div>
        </div>
        <div className="content-container">
          <Wt3dForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Wt3d</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.wt3ds.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditWt3d: (id, expense) => dispatch(startEditWt3d(id, expense)),
  startRemoveWt3d: (data) => dispatch(startRemoveWt3d(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWt3dPage);
