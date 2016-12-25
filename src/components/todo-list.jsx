import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

export default class TodoList extends Component {

  render() {
    return (
      <List className="todo-list">
        {this.props.todos.map((todo, todoIdx) => {
          return (
            <ListItem key={todoIdx}>
              { todo.text }
            </ListItem>
          )
        })}
      </List>
    )
  }
}