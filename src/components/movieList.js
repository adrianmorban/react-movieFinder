import React, { Component }from 'react';
import { Movie } from './movie';

export class MovieList extends Component {
    render(){
        const { movies } = this.props;
        return (
            <div className='MovieList'>
                {movies.map((movie) => {
                    return <div className='Movie' key={movie.imdbID}>
                        <Movie id={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year}/>
                    </div>
                    })
                }
            </div>
        )
    }
}