import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import BuildingMultiselect from './BuildingMultiselect';
import TableEdit from './TableEdit';

export default class Wt3dForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.wt3d ? props.wt3d.description : '',
      buildingRouteUrl: props.wt3d ? props.wt3d.buildingRouteUrl : '',
      note: props.wt3d ? props.wt3d.note : '',
      amount: props.wt3d ? (props.wt3d.amount / 100).toString() : '',
      createdAt: props.wt3d ? moment(props.wt3d.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <BuildingMultiselect
          handleSelect={(v) => console.log('------- selected value -----'+v)}
          stayOpen
        />
        <input
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <TableEdit />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Save Waytouch</button>
        </div>
      </form>
    );
  }
}
