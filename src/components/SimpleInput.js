import useInput from "../hooks/use-input";
const SimpleInput = () => {
  const {
    value: entredNameVal,
    isValid: entredNameIsValid,
    hasError: isNameHasError,
    inputChangeHandler: nameInputChangeHandler,
    focusInputValid: nameFocusInputValid,
    reste: resteNameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: entredEmailVal,
    isValid: entredEmaiIsValid,
    hasError: isEmailHasError,
    inputChangeHandler: emailInputChangeHandler,
    focusInputValid: emailFocusInputValid,
    reste: resteEmailHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = true;
  if (entredNameIsValid && entredEmaiIsValid) {
    formIsValid = false;
    console.log("submit");
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (isNameHasError || isEmailHasError) {
      return;
    }
    resteNameHandler();
    resteEmailHandler();
  };

  const nameFormValid = isNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailFormValid = isEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameFormValid}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={entredNameVal}
          onBlur={nameFocusInputValid}
          onChange={nameInputChangeHandler}
        />
        {isNameHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailFormValid}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={entredEmailVal}
          onBlur={emailFocusInputValid}
          onChange={emailInputChangeHandler}
        />
        {isEmailHasError && (
          <p className="error-text">email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
