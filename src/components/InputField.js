import React from 'react';
import styles from '../styles/Input.module.css';

import { FormControl, InputLabel, Input, errorText } from '@material-ui/core';

const InputField = ({ name, label, textArea, value, handleInput }) => {
  const handleChange = (e) => {
    handleInput(e.target.name, e.target.value);
  };

  return (
    <FormControl>
      <InputLabel required>{label}</InputLabel>
      <Input
        name={name}
        className={styles.input}
        multiline={textArea}
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default InputField;
