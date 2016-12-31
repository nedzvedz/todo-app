import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default class TodoList extends Component {

  render() {
    return (
      <List className="todo-list">
        {this.props.todos.map((todo) => {
          return (
            <ListItem key={todo.id} style={{textAlign: 'left'}}>
              <Checkbox 
                onCheck={() => {this.props.onToggleTodo(todo.id)}}
                checked={todo.completed}
                label={todo.text} />
            </ListItem>
          )
        })}
      </List>
    )
  }
}