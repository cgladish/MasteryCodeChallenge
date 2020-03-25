import { actionChannel, take, call, put } from 'redux-saga/effects';

import * as A from './actions';
import * as R from './resources';

export function* handleFetch() {
    yield put({ type: '@@loads/FETCH_START' });
    const loadsById = yield call(R.fetch);
    yield put({ type: '@@loads/FETCH_SUCCESS', payload: loadsById });
}

export function* watchFetch() {
    yield take('@@loads/FETCH');
    yield call(handleFetch);
}

export function* handleModifyLoadStatus(action: A.ModifyLoadStatusAction) {
    yield put({ type: '@@loads/MODIFY_LOAD_STATUS_START' });
    yield call(R.modify);
    yield put({
        type: '@@loads/MODIFY_LOAD_STATUS_SUCCESS',
        payload: {
            loadId: action.payload.loadId,
            loadStatus: action.payload.loadStatus,
        },
    } as A.ModifyLoadStatusSuccessAction);
}

export function* watchModifyLoadStatus() {
    const channel = yield actionChannel('@@loads/MODIFY_LOAD_STATUS');
    while (true) {
        const action: A.ModifyLoadStatusAction = yield take(channel);
        yield call(handleModifyLoadStatus, action);
    }
}

export const sagas = [watchFetch(), watchModifyLoadStatus()];
