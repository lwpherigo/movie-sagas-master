import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';

class MovieListItem extends Component {
    render() {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img alt='Movie Poster' src={this.props.movie.poster} onClick/>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{this.props.movie.title}</span>
                    </Grid>
                    <Grid item xs={5}>
                        <span>{this.props.movie.description}</span>
                    </Grid>  
                </Grid>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(MovieListItem);