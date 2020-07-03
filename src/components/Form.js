import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      status: false,
      filterStatus: -1,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onHandleChange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  }

  onClear() {
    this.setState({
      description: "",
      status: false,
      isRemove: false,
    });
  }

  render() {
    let { description, filterStatus } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="todo-input"
            maxLength={40}
            name="description"
            onChange={this.onHandleChange}
            value={description}
          />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-square" />
          </button>
          <div className="select">
            <select
              name="filterStatus"
              value={filterStatus}
              onChange={this.onHandleChange}
              className="filter-todo"
            >
              <option value={-1}>All</option>
              <option value={0}>Completed</option>
              <option value={1}>Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
