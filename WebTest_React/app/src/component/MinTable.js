import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

class MinTable extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      resultData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.GetIndexFragmentationList();
  }

  handleChange(checked) {}
  GetIndexFragmentationList = async () => {
    const d = await axios
      .post("http://localhost:3001/GetIndexFragmentationRatioMock")
      .catch(e => console.log("error: ", e));
    d.data.map( (v,i)=>  v.unshift(i));
    const result = d.data.map(v => (<tr>{v.map(v1 => (<td>{v1}</td>))}</tr>));
    
    
    this.setState({
      tableData: result
    });
  };

  render() {
    
    return (
      <Table
        striped
        bordered
        hover
        variant="dark"

        //style={{display:"inLine-table",marginLeft: "5%", width: "45%", top: "10%" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>INDEX NAME</th>
            <th>DEL RATE</th>
          </tr>
        </thead>
        <tbody>{this.state.tableData}</tbody>
      </Table>
    );
  }
}
export default MinTable;
