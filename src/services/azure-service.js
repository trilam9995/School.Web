import service from "./azure-storage";
import { trackPromise } from "react-promise-tracker";

export function uploadToBlobStorage(file, fullSasUri) {
  return service.uploadToBlobStorage(file, fullSasUri);
}