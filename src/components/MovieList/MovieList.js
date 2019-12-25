import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES',
        });
    }

    render() {
        return (
            <div>
                {this.props.store.moviesReducer.map((item, index) => {
                    return (
                        <MovieListItem key={index} movie={item} />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(MovieList);