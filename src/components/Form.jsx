import React from "react";
import Badge from "@mui/material/Badge";
import DoneIcon from "@mui/icons-material/Done";

const Form = ({ inputs, setInputs }) => {
  const validateFirstName = (e) => {
    const firstName = e.target.value;
    if (firstName.length > 2) {
      setInputs({ ...inputs, first: { valid: false, loader: "loader" } });
      setTimeout(() => {
        setInputs({ ...inputs, first: { valid: true, loader: "" } });
      }, 1500);
      return;
    }
    if (firstName.length < 2) {
      setInputs({ ...inputs, first: { valid: false, loader: "loader" } });
      setTimeout(() => {
        setInputs({ ...inputs, first: { valid: false, loader: "" } });
      }, 1500);
      return;
    }
  };

  const validateLastName = (e) => {
    const lastName = e.target.value;
    if (lastName.length > 2) {
      setInputs({ ...inputs, second: { valid: false, loader: "loader" } });
      setTimeout(() => {
        setInputs({ ...inputs, second: { valid: true, loader: "" } });
      }, 1500);
      return;
    }
    if (lastName.length < 2) {
      setInputs({ ...inputs, second: { valid: false, loader: "loader" } });
      setTimeout(() => {
        setInputs({ ...inputs, second: { valid: false, loader: "" } });
      }, 1500);
      return;
    }
  };
  const validateEmail = (e) => {
    const regEx = /\S+@\S+\.\S+/;
    const email = e.target.value;
    if (regEx.test(email)) {
      setInputs({ ...inputs, third: { valid: false, loader: "loader" } });
      setTimeout(() => {
        setInputs({ ...inputs, third: { valid: true, loader: "" } });
      }, 1500);
      return;
    }
    if (!regEx.test(email)) {
      setInputs({ ...inputs, third: { valid: false, loader: "loader" } });
      setTimeout(() => {
        setInputs({ ...inputs, third: { valid: false, loader: "" } });
      }, 1500);
      return;
    }
  };

  const validateButtons = () => {
    setInputs({ ...inputs, fourth: { valid: false, loader: "loader" } });
    setTimeout(() => {
      setInputs({ ...inputs, fourth: { valid: true, loader: "" } });
    }, 1500);
  };

  return (
    <div className="form">
      <div>
        <Badge
          className={`badge ${inputs.first.loader} translate`}
          color="secondary"
        >
          {inputs.first.valid ? (
            <DoneIcon className="icon" />
          ) : (
            <span className="number">1</span>
          )}
        </Badge>
        <span className="input-span">
          <input
            type="text"
            name="first-name"
            onBlur={(e) => validateFirstName(e)}
            required
          />
          <label htmlFor="first-name" className="label-name">
            <span className="content-name">First Name</span>
          </label>
        </span>
      </div>
      <div>
        <Badge
          className={`badge ${inputs.second.loader} translate`}
          color="secondary"
        >
          {inputs.second.valid ? (
            <DoneIcon className="icon" />
          ) : (
            <span className="number">2</span>
          )}
        </Badge>
        <span className="input-span">
          <input
            type="text"
            name="last-name"
            onBlur={(e) => validateLastName(e)}
            required
          />
          <label htmlFor="last-name" className="label-name">
            <span className="content-name">Last Name</span>
          </label>
        </span>
      </div>
      <div>
        <Badge
          className={`badge ${inputs.third.loader} translate`}
          color="secondary"
        >
          {inputs.third.valid ? (
            <DoneIcon className="icon" />
          ) : (
            <span className="number">3</span>
          )}
        </Badge>
        <span className="input-span">
          <input
            type="text"
            name="email"
            onBlur={(e) => validateEmail(e)}
            required
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email Address</span>
          </label>
        </span>
      </div>
      <div className="radio-div">
        <div>
          <Badge className={`badge ${inputs.fourth.loader}`} color="secondary">
            {inputs.fourth.valid ? (
              <DoneIcon className="icon" />
            ) : (
              <span className="number">4</span>
            )}
          </Badge>
          <p style={{ color: "grey" }}>What is the best time to contact you?</p>
        </div>
        <div className="py">
          <label>
            <input
              type="radio"
              className="option-input radio"
              name="example"
              onClick={validateButtons}
            />
            Monday 3pm
          </label>
          <label>
            <input
              type="radio"
              className="option-input radio"
              name="example"
              onClick={validateButtons}
            />
            Tuesday 3pm
          </label>
        </div>
      </div>
      <button type="submit" className="submit-button">
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
