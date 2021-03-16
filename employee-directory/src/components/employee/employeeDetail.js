import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../search";
// import "./Employee.css";

class EmployeeDetail extends Component {
  state = {
    search: "",
    employee: [],
    showEmployee: [],
  };

//  how the employee card is filtered when searched
  handleInputChange = e => {
    const searchInput = e.target.value.toLowerCase();

    const newEmployeeList = this.state.employee.filter(employee => {
        const employeeRender = employee.name.first + employee.name.last;
        return employeeRender.toLowerCase().includes(searchInput)
    })
    this.setState({
        showEmployee: newEmployeeList,
        search: searchInput
    });
  }

  componentDidMount() {
    API.employee().then((response) => {
      this.setState({
        employee: response.data.results,
        showEmployee: response.data.results,
      });
    });
  }

  render() {
    return (
      <div className="spacing">
          <SearchForm changeHandler={this.handleInputChange} value={this.state.search}/>
            <div className="datatable mt-3">
                <table className="empTable table-striped table-hover table-condensed">
                    <thead>
                        <tr className="m-2">
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    {this.state.showEmployee && this.state.showEmployee.map(employee => (
                        <tbody>
                            <tr key={employee.id.value}>
                                <td>
                                    <img src={employee.picture.large} alt="medium" />
                                </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.location.city}</td>
                                <td>{employee.location.state}</td>
                                <td>{employee.location.country}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
      </div>
    );
  }
}

export default EmployeeDetail;