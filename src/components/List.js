import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.addClass = React.createRef();
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  onUpdateStatus(id) {
    this.props.onUpdateStatus(id);
  }

  onDeleteTask(id) {
    this.addClass.current.classList.add("fall");
    this.props.onDeleteTask(id);
  }

  render() {
    const { tasks, filterTask } = this.props;
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filterTask === -1 &&
            tasks.map((task) => {
              return (
                <div
                  ref={this.addClass}
                  key={task.id}
                  className={
                    "todo" + (task.status === true ? " completed" : "")
                  }
                >
                  <li className={"todo-item"}>{task.description}</li>
                  <button
                    className="check-btn"
                    onClick={() => this.onUpdateStatus(task.id)}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button
                    className="trash-btn"
                    onClick={() => this.onDeleteTask(task.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              );
            })}

          {filterTask === 0 &&
            tasks.map((task) => {
              if (task.status === true) {
                return (
                  <div
                    ref={this.addClass}
                    key={task.id}
                    className={
                      "todo" + (task.status === true ? " completed" : "")
                    }
                  >
                    <li className={"todo-item"}>{task.description}</li>
                    <button
                      className="check-btn"
                      onClick={() => this.onUpdateStatus(task.id)}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                    <button
                      className="trash-btn"
                      onClick={() => this.onDeleteTask(task.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                );
              }
            })}

          {filterTask === 1 &&
            tasks.map((task) => {
              if (task.status === false) {
                return (
                  <div
                    ref={this.addClass}
                    key={task.id}
                    className={
                      "todo" + (task.status === true ? " completed" : "")
                    }
                  >
                    <li className={"todo-item"}>{task.description}</li>
                    <button
                      className="check-btn"
                      onClick={() => this.onUpdateStatus(task.id)}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                    <button
                      className="trash-btn"
                      onClick={() => this.onDeleteTask(task.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                );
              }
            })}
        </ul>
      </div>
    );
  }
}

export default List;
