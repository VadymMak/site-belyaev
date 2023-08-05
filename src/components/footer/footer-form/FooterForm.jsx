import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import styled from "./FooterForm.module.scss";

import useInput from "../../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const FooterForm = () => {
  const [formCurrent, setFormCurrent] = useState({});
  const formRef = useRef();
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(e.target);
    console.log("Submitted!");
    console.log(nameValue, emailValue, messageValue);

    setFormCurrent((prev) => ({
      ...prev,
      subject: "Hello from tester",
      user_name: nameValue,
      user_email: emailValue,
      message: messageValue,
    }));

    if (formCurrent) {
      emailjs
        .sendForm(
          "service_nvysbwo",
          "template_gfqc8f6",
          e.target,
          "LCyuVwyRhYktfjXai"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    resetName();
    resetEmail();
    resetMessage();
  };

  // const nameClasses = nameHasError ? "finvalid" : "";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const messageClasses = emailHasError ? "invalid" : "";

  return (
    <form onSubmit={submitFormHandler} className={styled.form} ref={formRef}>
      <div className={styled["form__contacts"]}>
        <div className={styled["form__contacts-name"]}>
          <div>
            <label htmlFor="name">
              Name:{" "}
              {nameHasError && (
                <span style={{ color: "red", fontSize: 12 }}>
                  please enter the name
                </span>
              )}
              <input
                // className={nameHasError ? "error" : ""}
                className="error"
                type="text"
                id="name"
                name="user_name"
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
            </label>
          </div>
        </div>
        <div className={styled["form__contacts-email"]}>
          <div className={emailClasses}>
            <label htmlFor="email">
              Email:{" "}
              {emailHasError && (
                <span style={{ color: "red", fontSize: 12 }}>
                  please enter valid email address
                </span>
              )}
              <input
                className={styled["form__contacts-name--input"]}
                type="email"
                id="email"
                name="user_email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
            </label>
          </div>
        </div>
      </div>
      <div className={styled["form__message"]}>
        <div className={messageClasses}>
          <label htmlFor="message">
            Message:{" "}
            {messageHasError && (
              <span style={{ color: "red", fontSize: 12 }}>
                {" "}
                fild should be not empty
              </span>
            )}
            <textarea
              className={styled["form__contacts-name--input"]}
              id="message"
              rows={4}
              value={messageValue}
              name="message"
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
          </label>
        </div>
      </div>
      <button type="submit" disabled={!formIsValid}>
        Send
      </button>
    </form>
  );
};

export default FooterForm;
