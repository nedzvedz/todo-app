import React, { Component } from 'react';
import FILTERS from '../constants/visibility-filters';
import FlatButton from 'material-ui/FlatButton';

export default class VisibilityFilters extends Component {

  render() {
    return (
      <div className="filters">
        <FlatButton className="filter-button" onClick={() => {this.props.onFilterSelection(FILTERS.SHOW_ALL)}} primary={this.props.activeFilter === FILTERS.SHOW_ALL} label="All" />
        <FlatButton className="filter-button" onClick={() => {this.props.onFilterSelection(FILTERS.SHOW_ACTIVE)}} primary={this.props.activeFilter === FILTERS.SHOW_ACTIVE} label="Active" />
        <FlatButton className="filter-button" onClick={() => {this.props.onFilterSelection(FILTERS.SHOW_COMPLETED)}} primary={this.props.activeFilter === FILTERS.SHOW_COMPLETED} label="Completed" />
      </div>
    )
  }
}