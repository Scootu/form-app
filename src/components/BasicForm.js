import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: entredFirstName,
    isValid: entredFirstNameIsValid,
    hasError: isNameInputValid,
    inputChangeHandler: nameInputChangeHandler,
    focusInputValid: nameFocusInputValid,
    reste: resteNameInput,
  } = useInput((entredFirstName) => entredFirstName.trim() !== "");

  const {
    value: entredLastName,
    isValid: entredLastNameIsValid,
    hasError: isLastNameInputValid,
    inputChangeHandler: lastNameInputChangeHandler,
    focusInputValid: lastNameFocusInputValid,
    reste: resteLastNameInput,
  } = useInput((entredLastName) => entredLastName.trim() !== "");

  const {
    value: entredEmail,
    isValid: entredEmailIsValid,
    hasError: isEmailInputValid,
    inputChangeHandler: emailInputChangeHandler,
    focusInputValid: emailFocusInputValid,
    reste: resteEmailInput,
  } = useInput((entredEmail) => entredEmail.includes("@"));

  let formValid = true;
  if (entredFirstNameIsValid && entredLastNameIsValid && entredEmailIsValid) {
    formValid = false;
  }
  const formSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      return;
    }
    console.log("submitted");
    console.log(
      "firstName :",
      entredFirstName,
      "lastName :",
      entredLastName,
      "email :",
      entredEmail
    );
    resteNameInput();
    resteLastNameInput();
    resteEmailInput();
  };

  const classInputErrorName = isNameInputValid
    ? "form-control invalid"
    : "form-control";
  const classInputErrorLastName = isLastNameInputValid
    ? "form-control invalid"
    : "form-control";
  const classInputErrorEmail = isEmailInputValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmit}>
      <div className="control-group">
        <div className={classInputErrorName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={entredFirstName}
            onChange={nameInputChangeHandler}
            onBlur={nameFocusInputValid}
          />
          {isNameInputValid && (
            <p className="error-text">Frist Name must not be empty .</p>
          )}
        </div>
        <div className={classInputErrorLastName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={entredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameFocusInputValid}
          />
          {isLastNameInputValid && (
            <p className="error-text">Last Name must not be empty .</p>
          )}
        </div>
      </div>
      <div className={classInputErrorEmail}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={entredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailFocusInputValid}
        />
        {isEmailInputValid && (
          <p className="error-text">Email must containe @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
