import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

function* buyMobile() {
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}
function* sellMobile() {
  yield put({ type: "SELL_MOBILE_SUCCESS" });
}
function* getAllUsers() {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(users);
    yield put({ type: "GET_ALL_USERS_SUCCESS", payload: users.data });
  } catch (err) {
    yield put({ type: "GET_ALL_USERS_FAILED", message: err.message });
  }
}
function* getSingleUser({ id }) {
  console.log(id);
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    console.log(users);
    yield put({ type: "GET_SINGLE_USER_SUCCESS", payload: users.data });
  } catch (err) {
    yield put({ type: "GET_SINGLE_USER_FAILED", message: err.message });
  }
}
function* addUser({ payload }) {
  console.log(payload);
  try {
    let users = yield call(
      axios.post,
      "https://jsonplaceholder.typicode.com/users",
      payload
    );
    yield put({ type: "ADD_USER_SUCCESS", payload: users.data });
  } catch (err) {
    yield put({ type: "ADD_USER_FAILED", message: err.message });
  }
}

function* editUser({ payload, id }) {
  console.log(payload);
  try {
    let users = yield call(
      axios.put,
      "https://jsonplaceholder.typicode.com/users/" + payload.id,
      payload
    );
    yield put({ type: "EDIT_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "EDIT_USER_FAILED", message: error.message });
  }
}
function* deleteUser({ id }) {
  try {
    let users = yield call(
      axios.delete,
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    yield put({ type: "DELETE_USER_SUCCESS", data: id });
  } catch (error) {
    yield put({ type: "DELETE_USER_FAILED", message: error.message });
  }
}
export function* watchUser() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile),
    takeLatest("SELL_MOBILE", sellMobile),
    takeLatest("GET_ALL_USERS", getAllUsers),
    takeLatest("GET_SINGLE_USER", getSingleUser),
    takeLatest("ADD_USER", addUser),
    takeLatest("EDIT_USER", editUser),
    takeLatest("DELETE_USER", deleteUser),
  ]);
}
