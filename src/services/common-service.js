import service from "./api";
import { trackPromise } from "react-promise-tracker";
import { access_token, getCookies } from "../utils/utils";

export function fetchFromApi(url) {
  return trackPromise(service.get(`/${url}`));
}

export function fetchFromApiById(url, id) {
  return trackPromise(service.getParams(`/${url}/${id}`));
}

export function fetchFromApiByParams(url, params) {
  return trackPromise(service.getParams(`/${url}`, params));
}

export function deleteApi(url, id) {
  return trackPromise(service.delete(`/${url}/${id}`));
}

export function deleteApiParams(url, params) {
  return trackPromise(service.delete(`/${url}?${params}`));
}

export function postAPI(url, payload) {
  return trackPromise(service.post(`/${url}`, payload));
}

export function postWithoutHeader(url, payload) {
  return trackPromise(service.postWithoutHeader(`/${url}`, payload));
}
export function putAPI(url, payload) {
  const { id, ...rest } = payload;

  return trackPromise(service.patch(`/${url}/${id}`, rest));
}

export function putPatchBodyAPI(url, payload) {
  return trackPromise(service.patchBody(`/${url}`, payload));
}

export function postAPINoTrackPromise(url, payload) {
  return service.post(`/${url}`, payload);
}

export function putAPINoTrackPromise(url, payload) {
  return service.patchBody(`/${url}`, payload);
}

export function fetchFromApiByParamsNoTrackPromise(url, params) {
  return service.getParams(`/${url}`, params);
}

export function deleteFromApiByParamsNoTrackPromise(url, id) {
  return service.delete(`/${url}/${id}`);
}
