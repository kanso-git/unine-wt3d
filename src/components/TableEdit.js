import React from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import { makeData, Logo, Tips } from './Utils';

class TableEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[{
      Header: 'Secrétariats',
      columns: [{
        Header: 'Local Code',
        accessor: 'firstName',
      }, {
        Header: 'Local Name',
        id: 'lastName',
        accessor: d => d.lastName,
      }, {
        Header: '',
        accessor: 'firstName',
        Cell: row => (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <button className="button button--delete" onClick={() => alert(row)} >
              delete
            </button>
          </div>
        ),
      }],
    }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}
export default TableEdit;
