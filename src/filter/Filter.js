import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import FilterByName from './FilterByName';
import FilterByCity from './FilterByCity';

export default class Filter extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              <form onSubmit={(event) => event.preventDefault()}>
                <h1>Find the Best Specialist</h1>
                {/* Filter by name */}
                {this.props.nameFilter ? (
                  <FilterByName
                  getList={value.getSpecialists}
                  list={value.specialists}
                  dispatchType={this.props.dispatchType}
                 />
                ) : <span></span>}
                {/* Filter by city */}
                {this.props.cityFilter ? (
                  <FilterByCity
                   getList={value.getSpecialists}
                   list={value.specialists}
                   dispatchType={this.props.dispatchType}
                   />) : <span></span>}
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
