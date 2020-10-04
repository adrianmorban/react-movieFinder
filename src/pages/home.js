import React, { Component } from 'react';
import { SearchForm } from '../components/searchForm';
import { Title } from '../components/title';
import { MovieList } from '../components/movieList';

export class Home extends Component {
    state = {usedSearch: false, results: [] };

    _handleResults = (results) => {
      this.setState({results, usedSearch: true})
    }
  
    _renderResults = () => {
      return this.state.results.length === 0 ? <p>sin resultados</p> : <MovieList movies={this.state.results}/>
    }

    render(){
        return(
            <div>
                <Title>Movie Finder</Title>
                <div className='container'>
                    <SearchForm onResults={this._handleResults}/>
                    {this.state.usedSearch ? this._renderResults() : <small>Use the form to search</small>}
                </div>
            </div>
        )
    }
}