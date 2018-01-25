import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';
import Select from 'react-select';

import { bdl } from '../actions';

const staticdata = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
  { label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(staticdata.slice(1));

class BuildingMultiselect extends Component {

  state={
    removeSelected: true,
    disabled: false,
    crazy: false,
    stayOpen: false || this.props.stayOpen,
    value: [],
    rtl: false,
  }
  componentDidMount() {
    this.getBuildingList();
  }
  getBuildingList = async () => {
    await this.props.getBuildingList();
  }
  handleSelectChange= (value) => {
    console.log('You\'ve selected:', value);
    this.setState({ value });
    this.props.handleSelect(value);
  }

  toggleCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  toggleRtl= (e) => {
    const rtl = e.target.checked;
    this.setState({ rtl });
  }

  render() {
    const {
      crazy, disabled, stayOpen, value,
    } = this.state;
    const options = crazy ? WHY_WOULD_YOU : this.props.buildingList;
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label} </h3>
        <Select
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your building(s)"
          removeSelected={this.state.removeSelected}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const buildingList = state.bdl.buildingList;
  return { buildingList };
};

export default connect(mapStateToProps,{...bdl})(BuildingMultiselect);
