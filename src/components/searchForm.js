import React, { Component } from 'react';
import axios from 'axios';

const ApiKey = '418dc58e';

export class SearchForm extends Component {
    state = {inputMovie:''}

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        axios(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${this.state.inputMovie}`)
            .then(res => {
                const { Search = []} = res.data;
                this.props.onResults(Search);
                console.log(Search);
            })
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Find a movie" 
                        onChange={this._handleChange}
                        />
                    </p>
                    <p className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </p>
                </div>
            </form>
        )
    }
}