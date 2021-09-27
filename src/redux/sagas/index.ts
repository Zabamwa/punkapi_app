import {all} from 'redux-saga/effects'
import GetListBeerSaga from "./handlers/getListOfBeer";

export default function* rootSaga() {
    yield all([
        GetListBeerSaga(),
    ])
}