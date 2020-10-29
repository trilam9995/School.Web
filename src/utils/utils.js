import Cookies from "universal-cookie";
const cookies = new Cookies();

export const access_token = "access_token";
export const remember_account = "remember_account";
export const account = "account";
export const user_profile = "user_profile";
export const API_DPS_SPD =
  "https://dps-spd-identity-api-dev.azurewebsites.net/api/";

export const setLocalStorage = (name, value) =>
  localStorage.setItem(name, value);

export const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

export const removeLocalStorage = (name) => {
  return localStorage.removeItem(name);
};

export const setCookies = (name, value, expires) => {
  let d = new Date();
  d.setTime(d.getTime() + expires * 1000);

  cookies.set(name, value, { path: "/", expires: d });
};

export const getCookies = (name) => {
  return cookies.get(name);
};

export const removeCookies = (name) => {
  cookies.remove(name, { path: "/" });
};

export const clearAllCookies = () => {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++)
    removeCookies(cookies[i].split("=")[0]);
};

export const formatDateAndTime = (d) => {
  var date = new Date(d.includes("Z") ? d : d + "Z");

  return (
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear() +
    " " +
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
  );
};

export const formatDateAndTimeAt = (d) => {
  var date = new Date(d.includes("Z") ? d : d + "Z");

  return (
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "." +
    (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    "." +
    date.getFullYear() +
    " at " +
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
  );
};

export const formatTime = (d) => {
  var date = new Date(d.includes("Z") ? d : d + "Z");

  return (
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
  );
};

export const formatDate = (d) => {
  var date = new Date(d);

  return (
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear()
  );
};

export const generateUUID = () => {
  var d = new Date().getTime();
  var d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const mappingToOption = (items, label, value) => {
  if (!items) return [];
  if (items.length === 0) return [];

  let array = [];
  items.map((record) => {
    array.push({
      label: record[label],
      value: record[value],
    });
  });
  return array;
};

export const getTime = (date) => {
  const currentDate = new Date(date);

  const hour =
    currentDate.getHours() < 10
      ? "0" + currentDate.getHours()
      : currentDate.getHours();
  const minute =
    currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  const time = hour + ":" + minute + " " + ampm;

  return time;
};

export const returnZeroWhenNAN = (value) => {
  if (value === Infinity) return 0;
  if (value === -Infinity) return 0;
  if (isNaN(value)) return 0;
  return Math.round(value * 100) / 100;
};

export const getScoreItem = (item, value) => {
  const record = item.find((rc) => rc.code === value);
  if (!record) return 0;
  return record.score;
};

export const getNameFromItem = (item, value) => {
  const record = item.find((rc) => rc.item === value);
  if (!record) return "";
  return record.item;
};

export const numberWithCommas = (x) => {
  if (typeof x === "undefined") return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const chartValue = 3;

export const mappingItemToOption = (items) => {
  let array = [];
  items.map((record) => {
    array.push({
      label: record.name,
      value: record.code,
    });
  });
  return array;
};

export const mappingOnlyItemFieldToOption = (items) => {
  if (!items) return [];
  if (items.length === 0) return [];
  let array = [];
  items.map((record) => {
    array.push({
      label: record.item,
      value: record.item,
    });
  });
  return array;
};

export const checkNull = (item) => {
  if (!item) return [];
  return item;
};

export const renderImage = (item) => {
  if (!item) return null;
  if (item.length === 0) return null;
  return item[0].imageUrl;
};

export const generateGuid = (item) => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const createMarkup = (text) => {
  return {
    __html: text,
  };
};

export const convertDuration = (duratuon) => {
  return new Date(duratuon * 1000).toISOString().substr(11, 8);
};

export const savePhoneNumber = (phone) => {
  return phone
    .split(" ")
    .join("")
    .replace("+", "")
    .replace("(", "")
    .replace(")", "")
    .replace("-", "");
};

export const displayPhoneNumber = (phone) => {
  if (!phone) return null;
  if (phone.charAt(0) === "+") return phone;
  return "+" + phone;
};
