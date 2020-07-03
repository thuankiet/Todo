import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import shortId from "shortid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      displayStatus: -1,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("activities")) {
      var tasks = JSON.parse(localStorage.getItem("activities"));
      this.setState((state) => ({
        tasks: tasks,
      }));
    }
  }

  onSubmit(data) {
    let { tasks } = this.state;
    let task = {
      id: shortId.generate(),
      description: data.description,
      status: data.status,
    };
    tasks.push(task);
    this.setState((state) => ({
      ...this.state,
      tasks: tasks,
    }));
    localStorage.setItem("activities", JSON.stringify(tasks));
  }

  onUpdateStatus(id) {
    const { tasks } = this.state;
    tasks.find((task) => {
      if (id === task.id) {
        task.status = !task.status;
        this.setState({
          tasks: tasks,
        });
        localStorage.setItem("activities", JSON.stringify(tasks));
      }
    });
  }

  onDeleteTask(id) {
    const { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("activities", JSON.stringify(tasks));
    }
  }

  findIndex(id) {
    const { tasks } = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        return index;
      }
    });
  }

  onFilter(filterStatus) {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({ displayStatus: filterStatus });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Todo List Javascript</h1>
        </header>
        <Form onSubmit={this.onSubmit} onFilter={this.onFilter} />
        <List
          onUpdateStatus={this.onUpdateStatus}
          onDeleteTask={this.onDeleteTask}
          tasks={this.state.tasks}
          filterTask={this.state.displayStatus}
        />
      </div>
    );
  }
}

export default App;
