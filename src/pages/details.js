import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const ApiKey = '418dc58e';

export class Detail extends Component {

    state = { movie:{} }

    componentDidMount () {
        const {id} = this.props.match.params;
        this._fetchMovie(id);
    }
    _fetchMovie = (id) => {
        axios(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`)
        .then(res => this.setState({movie:res.data}))
    }
    render(){
        const {Title, Poster, Year, idmbRating, Genre} = this.state.movie;
        return(
            <div>
                <Link to='/'><button>Volver</button></Link>
                <h1>{Title}</h1>
                <img src={Poster}/>
                <h3>{Year}</h3>
                <p>{Genre}</p>
                <p>{idmbRating}</p>
            </div>
        )
    }
}