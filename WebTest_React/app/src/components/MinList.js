import React, { Component } from "react";
import Button from "react-bootstrap/Button";
//import Table from "react-bootstrap/Table";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MinTable extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      rowData: [],
      tableData: [],
      tetData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.GetIndexListEvent();
  }

  handleChange(checked) {}
  GetIndexListEvent = async () => {
    const d = await axios
      .get("http://localhost:3001/GetIndexListMock")
      .catch(e => console.log("error: ", e));
    console.log("result:", d.data[0]);
    const result = d.data.map(v => (
      <tr style={{ height: "10px" }}>
        {v.map(v1 => (
          <td>{v1}</td>
        ))}
      </tr>
    ));
    this.setState({
      tableData: result,
      rowData: [
        {
          id: 1,
          name: "min"
        },
        {
          id: 2,
          name: "min2"
        }
      ],
      testData: d.data
    });
  };

  render() {
    {
      console.log("test:", this.state.rowData);
    }
    return (
      <BootstrapTable
        //style={{backgroundColor: "white",fontSize: "13px"}}

        data={this.state.rowData}
        pagination
      >
        <TableHeaderColumn isKey dataField="id">
          Product ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        
        {/* <thead>
            <tr>
                <th>Indexs</th>
            </tr>
          <tr>
            <th>USER ID</th>
            <th>INDEX NAME</th>
            <th>B+ TREE LEVEL</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody style={{height:"100px", overflowY:"true"}}>
            {this.state.tableData}
        </tbody> */}
      </BootstrapTable>
    );
  }
}
export default MinTable;
