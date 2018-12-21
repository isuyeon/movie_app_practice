import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

class Movie extends Component {
    static defaultProps = { 
        title: '',
        poster: '',
        genres: '',
        synopsis: ''
    }
    static propTypes = {
        title:PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array,
        synopsis: PropTypes.string
    }

    render() {
        return(
            <div className="area">
                <header>
                    <img src={this.props.poster} alt={this.props.title}/>
                    <h1>{this.props.title}</h1>
                </header>
                <ul>
                    <li>{this.props.genres}</li>
                </ul>
                <p>{this.props.synopsis}</p>
            </div>
        )
    }
}

export default Movie
