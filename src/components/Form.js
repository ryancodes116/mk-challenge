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

    if (submission.email === '') {
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

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(submission.email.trim())) {
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
    <div
      className={styles.form}
      style={{ marginBottom: validatedForm ? '4rem' : '0' }}
    >
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h4" color="secondary">
          Let's Connect!
        </Typography>
        <form className={styles.form}>
          <TextField
            required
            label="First Name"
            name="firstName"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={submission.firstName}
            helperText={submission.firstNameError}
          />

          <TextField
            required
            label="Last Name"
            name="lastName"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={submission.lastName}
            helperText={submission.lastNameError}
          />

          <TextField
            required
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={submission.email}
            helperText={submission.emailError}
          />

          <TextField
            required
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

          <small className={styles.small}>* Required</small>
          <Button
            style={{ marginTop: '2rem' }}
            size="large"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="secondary"
            handleInput={handleChange}
          >
            {submission.submitted ? <DoneIcon /> : 'SUBMIT'}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
