import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.onAddTodoClick(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <TextField hintText="New todo" floatingLabelText="New todo" value={this.state.value} onChange={(e) => {this.handleChange(e)}} />
        <RaisedButton className="submit-button" primary={true} type="submit">Add</RaisedButton>
      </form>  
    );    
  }
}
