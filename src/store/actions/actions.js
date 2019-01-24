export const Age_up_Async = val => {
  return {
    type: "AGE_UP",
    val
  };
};
export const Age_up = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(Age_up_Async(val));
    }, 5000);
  };
};
export const Age_Down = val => {
  return {
    type: "AGE_DOWN",
    val
  };
};
export const loading = () => {
  return {
    type: "LOADING"
  };
};
