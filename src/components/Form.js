import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const Form = () => {
  const [submission, setSubmission] = useState({
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    email: '',
    emailError: '',
    message: '',
    messageError: '',
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmission((prevSubmission) => {
      return { ...prevSubmission, [name]: value };
    });
    console.log(submission);
  };

  const validatedForm = () => {
    setSubmission((prevSubmission) => {
      return {
        ...prevSubmission,
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        messageError: '',
      };
    });

    let isError = false;

    if (submission.firstName === '') {
      isError = true;
      setSubmission((prevSubmission) => {
        return { ...prevSubmission, firstNameError: 'First name is required' };
      });
    }

    if (submission.lastName === '') {
      isError = true;
      setSubmission((prevSubmission) => {
        return { ...prevSubmission, lastNameError: 'Last name is required' };
      });
    }

    if (submission.firstName === '') {
      isError = true;
      setSubmission((prevSubmission) => {
        return { ...prevSubmission, emailError: 'Email is required' };
      });
    }

    if (submission.message === '') {
      isError = true;
      setSubmission((prevSubmission) => {
        return { ...prevSubmission, messageError: 'Message is required' };
      });
    }

    if (submission.email.indexOf('@') === -1) {
      isError = true;
      setSubmission((prevSubmission) => {
        return { ...prevSubmission, emailError: 'Valid email is required' };
      });
    }

    return isError;
  };

  const handleSubmit = (e) => {
    const err = validatedForm();

    if (!err) {
      setSubmission((prevSubmission) => {
        return {
          ...prevSubmission,
          submitted: true,
        };
      });

      setTimeout(() => {
        setSubmission({
          firstName: '',
          firstNameError: '',
          lastName: '',
          lastNameError: '',
          email: '',
          emailError: '',
          message: '',
          messageError: '',
          submitted: false,
        });
      }, 3000);
    }

    e.preventDefault();
  };

  return (
    <div className={styles.form}>
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h4" color="secondary">
          Let's Connect!
        </Typography>
        <form className={styles.form}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={submission.firstName}
            helperText={submission.firstNameError}
          />

          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={submission.lastName}
            helperText={submission.lastNameError}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={submission.email}
            helperText={submission.emailError}
          />

          <TextField
            style={{ marginTop: '2rem' }}
            label="Message"
            name="message"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            onChange={handleChange}
            value={submission.message}
            helperText={submission.messageError}
          />
          <Button
            style={{ marginTop: '2rem' }}
            size="large"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="secondary"
            handleInput={handleChange}
          >
            {submission.submitted ? 'SUBMITTED!' : 'SUBMIT'}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
