import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutline from 'material-ui/svg-icons/toggle/check-box-outline-blank';

export default class TodoList extends Component {

  renderCheckbox(todo) {
    if (todo.completed) {
      return <CheckBox className="toggle-checkbox" onClick={() => {this.props.onToggleTodo(todo.id)}} />
    } else {
      return <CheckBoxOutline className="toggle-checkbox" onClick={() => {this.props.onToggleTodo(todo.id)}} />
    }
  }

  render() {
    return (
      <List className="todo-list">
        {this.props.todos.map((todo) => {
          return (
            <ListItem key={todo.id} style={{textAlign: 'left'}}>
              { this.renderCheckbox(todo) }
              { todo.text }
            </ListItem>
          )
        })}
      </List>
    )
  }
}