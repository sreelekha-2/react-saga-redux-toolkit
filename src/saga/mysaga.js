import { takeEvery, put } from 'redux-saga/effects';

function* changePayload() {
  yield put({ type: 'INC_PAYLOAD', payload: 5 });
}

function* mySaga() {
  yield takeEvery('INC', changePayload);
  yield takeEvery('USERS', getUsers);
}

const users = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await res.json();
  return data;
};

function* getUsers() {
  console.log('get');
  const userData = yield users();
  console.log(userData);
  yield put({ type: 'USERS_DATA', payload: userData });
}

export default mySaga;
