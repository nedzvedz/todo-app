import React, { Component } from 'react';
import logo from '../../logo.svg';
import Card from 'material-ui/Card';
import VisibleTodos from '../../containers/visible-todos';
import AddTodoContainer from '../../containers/add-todo';
import Filters from '../../containers/filters';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onAppInit();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <Card className="App-card">
            <AddTodoContainer />
            <Filters />
            <VisibleTodos />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
