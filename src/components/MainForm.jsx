import React, { useState } from "react";
import FormDisplay from "./FormDisplay";

const MainForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState(true);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length < 2 ||
      lastName.length < 2 ||
      email.length < 5 ||
      password.length < 8 ||
      confirmPassword.length < 8
    ) {
      alert("invalid form");
    } else {
      setIsSubmitted(true);
      const newUser = { firstName, lastName, email, password, confirmPassword };
      console.log("Welcome", newUser);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value < 8) {
      setPasswordError(" Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Confirm Password must mactch");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
                   
        <div>
          <label>First Name: </label>              
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            name="firsName"
            value={firstName}
          />
          {firstName.length < 2 && (
            <p style={{ color: "red" }}>
              firstName must be at least 2 characters
            </p>
          )}
                      
        </div>
                   
        <div>
          <label>Last Name: </label>               
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            value={lastName}
          />
          {lastName.length < 2 && (
            <p style={{ color: "red" }}>
              lastName must be at least 2 characters
            </p>
          )}
                    
        </div>
                                
        <div>
          <label>Email: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
          {email.length < 2 && (
            <p style={{ color: "red" }}>email must be at least 2 characters</p>
          )}
        </div>
                  
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
          {password.length < 8 && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters
            </p>
          )}
        </div>
                 
        <div>
          <label> Confirm Password: </label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            value={confirmPassword}
          />
          {confirmPassword.length < 8 && (
            <p style={{ color: "red" }}>
              confirmPassword must be at least 8 characters
            </p>
          )}
          {confirmPassword !== password && (
            <p style={{ color: "red" }}>confirmPassword must match!</p>
          )}
        </div>
                   
        <button
          type="submit"
          disabled={
            firstName.length < 2 ||
            lastName.length < 2 ||
            email.length < 5 ||
            password.length < 8 ||
            confirmPassword.length < 8
          }
        >
          Submit
        </button>
      </form>
      <FormDisplay
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
      />
    </div>
  );
};

export default MainForm;
