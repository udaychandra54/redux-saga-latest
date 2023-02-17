import { applyMiddleware, legacy_createStore } from "redux";
import { mobileReducer } from "./reducers/mobile";
import createSagaMiddleware from "@redux-saga/core";
import { watchUser } from "./sagas/users.saga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  mobileReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchUser);

export default store;
