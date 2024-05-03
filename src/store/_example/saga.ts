import { put, takeLatest } from 'redux-saga/effects';
import { _exampleAction } from './actions';

function* userLoginSaga({ payload }: ReturnType<typeof _exampleAction.request>): any {
  const { onSuccessCb, onFailCb } = payload;
  try {
    yield put(_exampleAction.success({}));

    if (onSuccessCb) {
      onSuccessCb();
    }
  } catch (error: any) {
    if (onFailCb) {
      onFailCb();
    }

  }
}
export function* watchLogin(): any {
  yield takeLatest(_exampleAction.request, userLoginSaga);
}
