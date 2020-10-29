import { all } from "redux-saga/effects";

// import { watchUser } from "./user-saga";

export default function* root() {
  yield all([
    // watchUser(),
  ]);
}
