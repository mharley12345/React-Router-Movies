import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from 'react-router-dom';
import MovieCard from './Movies/MovieCard'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        
        <SavedList list={this.state.savedList} />
        <Route exact path="/" Component={MovieList}/>
        <Route path='/movies/:id' Component={Movie}/>
        <Route path='/movies/cards/:id' Component={MovieCard}/>>
          <a href="..../movies/:id">Movie Card</a>   
      </div>
    );
  }
}
