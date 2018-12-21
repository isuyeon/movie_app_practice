import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
    state = {
        movies : [
            {
                title: "a",
                image: "img-a"
            }, {
                title: "b",
                image: "img-b"
            } , {
                title: "c",
                image: "img-c"
            }
        ]
    }
    callApi = () => {
        fetch('https://yts.am/api/v2/list_movies.json')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }
    getMovies = async() => {
        const getMovies = await this.callApi()
        this.setState({
            movies: getMovies
        })
    }
    renderMovies = () => {
        // const movies = this.state.movies.map((movie) => {
        //     return <Movie 
        //         title={movie.title}
        //         poster={movie.large_cover_image}
        //         genres={movie.genres}
        //         synopsis={movie.synopsis}
        //         key={movie.id}
        //         />
        // })
        // return (
        //     movies
        // )
        return (
            this.state.movies.map((movie, index) => {
                return <Movie 
                title={movie.title} 
                poster={movie.poster}
                key={index}
                />
            })
        )
    }
    
    render() {
        return(
            <div>
                {this.renderMovies()}
            </div>   
        )
    }
    componentDidMount() {
        // this.getMovies()
    }
}

export default App