const initialState = {
  age: 20
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    //every case should return a newState with all its properties
    case "AGE_UP":
      return {
        age: newState.age + action.val,
        loading: false
      };
      break;
    case "AGE_DOWN":
      return {
        age: newState.age - action.val,
        loading: false
      };
      break;
    case "LOADING":
      return {
        loading: true,
        age: newState.age
      };
      break;
    default:
      return newState;
  }
};
export default reducer;
