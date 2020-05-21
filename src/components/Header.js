import React from 'react';
import styles from '../styles/Header.module.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import logo from '../images/logo2.png';

const Header = () => {
  return (
    <header>
      <AppBar color="primary" position="static" className={styles.appBar}>
        <Toolbar className={styles.flex}>
          <img className={styles.logo} src={logo} alt="MK Decision" />
          <Typography variant="h6" style={{ marginLeft: 'auto' }}>
            Contact Form
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
