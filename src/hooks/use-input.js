import { useState, useReducer } from "react";
const initailValue = {
  value: "",
  isTouched: false,
};
const reducerFun = (state, action) => {
  if (action.type === "KEYSTROCK") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  } else if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  } else if (action.type === "RESTE") {
    return {
      value: "",
      isTouched: false,
    };
  } else {
    return initailValue;
  }
};
const useInput = (applyValidation) => {
  const [inputState, dispatch] = useReducer(reducerFun, initailValue);

  const isEntredValueInvalid = applyValidation(inputState.value);
  const hasError = !isEntredValueInvalid && inputState.isTouched;
  const inputChangeHandler = (event) => {
    dispatch({ type: "KEYSTROCK", value: event.target.value });
  };
  const focusInputValid = (event) => {
    dispatch({ type: "BLUR" });
  };
  // just we need a reste function

  const reste = () => {
    dispatch({ type: "RESTE" });
  };
  return {
    value: inputState.value,
    isValid: isEntredValueInvalid,
    hasError,
    inputChangeHandler,
    focusInputValid,
    reste,
  };
};

export default useInput;
