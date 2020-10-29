export const ON_OPEN = "ON_OPEN";
export const ON_CLOSE = "ON_CLOSE";
export const ON_OPEN_ERROR = "ON_OPEN_ERROR";

export const onOpen = (success, message) => {
  return {
    type: ON_OPEN,
    payload: {
      success,
      message,
    },
  };
};

export const onClose = () => {
  return {
    type: ON_CLOSE,
  };
};

export const onOpenError = (error) => {
  return {
    type: ON_OPEN_ERROR,
    payload: {
      error,
    },
  };
};
