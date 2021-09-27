import {put, call, takeEvery} from 'redux-saga/effects'
import {requestGetListOfBeer} from "../request/getListOfBeer";
import {getList, setList, successFetchedTable, errorFetchedTable, pendingFetchedTable} from '../../../features/listOfBeer/ListOfBeerSlice'

function* getListOfBeer(params?:any) {
    let result;
    yield put({type: pendingFetchedTable.type})
    try{
        result = yield call(requestGetListOfBeer,params.payload.params)
        yield put({type: setList.type, payload:result})
        yield put({type: successFetchedTable.type})
    }
    catch(e) {
        yield put({type: errorFetchedTable.type})
    }
}

function* GetListBeerSaga() {
    yield takeEvery(getList.type, getListOfBeer)
}

export default GetListBeerSaga;