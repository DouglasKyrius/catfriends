import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import api from '../services/api';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    this.loadRobots();
  }

  loadRobots = async () => {
    const response = await api.get(`/users`);

    console.log(response);
    
    this.setState({ robots: response.data });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
      <div className='tc'>
        <h1 className='f1'>CatFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <h1>Loading</h1>
        </Scroll>
      </div> :
      (
        <div className='tc'>
          <h1 className='f1'>CatFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);