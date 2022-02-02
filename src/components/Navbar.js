import React from 'react';
//import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import { makeStyles } from '@mui/material';
//import styled from 'styled-components';

const myNavStyle = {
  backgroundColor: '#D3D3D3',
  position: 'static',
  color: '#000000',
};

const myNavLinkStyle = {
  color : '#000000',
  fontSize : 15,
  textDecoration : 'none',
  marginLeft : 10,
  marginRight : 5
}

const Navbar = () => {
  //const classes = useStyle();
  return (
    <AppBar style={myNavStyle}>
      <Toolbar>
        <NavLink style={myNavLinkStyle} to='/'>Admin</NavLink>
        <NavLink style={myNavLinkStyle} to='/students'>Students</NavLink>
        <NavLink style={myNavLinkStyle} to='/addstudent'>Add Student</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
