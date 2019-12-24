import axios from 'axios';
import { put, takeLastest } from 'redux-saga/effects';

function* getMovies() {
    console.log('in function* getMovies');
    try {
        const response = yield axios ({
            method: 'GET',
            url: ''
        })
    }
}