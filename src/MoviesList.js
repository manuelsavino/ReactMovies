import React, { Component } from 'react';
import Movie from './movie';
import styled from 'styled-components'

class MoviesList extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=acc856a56d4d1ba6ad307ce6cbfa0e1d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
            const movies = await res.json();
            this.setState({
                movies: movies.results,
            });
        } catch (e) {
            console.log(e); // eslint-disable-line
        }
    }

    render() {
        return (
            <MovieGrid>
                {this.state.movies.map(movie => <Movie movie={movie} key={movie.id} />)} {/* eslint-disable-line */}
            </MovieGrid>
        );
    }
}

export default MoviesList;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;


`;

