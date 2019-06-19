import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './Movies/MovieCard'
import {Router as match} from 'react-router-dom'
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = match.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: this.render.data}));
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    const { movie } = this.state;
    return (
      <div className="save-wrapper">
        <MovieCard movie ={movie} />
        <div className="save-button" onClick ={()=> this.saveMovie()}>Save</div>
      </div>
    );
  }
}