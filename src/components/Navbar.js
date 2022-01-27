import React from 'react';
//import ReactDOM from 'react-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import { makeStyles } from '@mui/material';
//import styled from 'styled-components';

const myNavStyle = {
  backgroundColor: '#D3D3D3',
  position: 'static',
  color: '#000000',
};

const Navbar = () => {
  //const classes = useStyle();
  return (
    <AppBar style={myNavStyle}>
      <Toolbar>
        <Typography component='h2'>Admin</Typography>
        <Typography component='h2'>Students</Typography>
        <Typography component='h2'>Add Student</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
