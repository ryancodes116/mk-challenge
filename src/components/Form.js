import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { Paper, Button, Typography } from '@material-ui/core';

import InputField from './InputField';

const Form = () => {
  const [submission, setSubmission] = useState({
    firstName: '',
    lastName: '',
    email: '',
    summary: '',
  });

  const handleChange = (name, value) => {
    setSubmission((prevSubmission) => {
      return { ...prevSubmission, [name]: value };
    });
    console.log(submission);
  };

  const handleSubmit = (e) => {
    console.log('submitted');

    e.preventDefault();
  };

  return (
    <div className={styles.form}>
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h3" color="secondary">
          Contact Us
        </Typography>
        <form className={styles.form}>
          <InputField
            name="firstName"
            label="First Name"
            handleInput={handleChange}
            value={submission.firstName}
          />

          <InputField
            name="lastName"
            label="Last Name"
            handleInput={handleChange}
            value={submission.lastName}
          />

          <InputField
            name="email"
            label="Email"
            handleInput={handleChange}
            value={submission.email}
          />

          <InputField
            name="message"
            label="Message"
            textArea="true"
            handleInput={handleChange}
            value={submission.error}
          />

          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="secondary"
            handleInput={handleChange}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
