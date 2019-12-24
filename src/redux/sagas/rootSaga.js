import { all } from 'redux-saga/effects';
import getMovieSaga from './getMovieSaga';

function* rootSaga() {
    console.log('we are watching');
    yield all(
        [
            getMovieSaga(),
        ]
    );
}

export default rootSaga;