import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


const boxStyling = {
    marginLeft:20,
    marginRight:20,
    marginTop: 'auto',
    marginBottom: 'auto'
}

const boxChildrenStyling = {
    marginTop:10, 
    marginBottom:10
}

const PageNotFound = () => {
  return (
    <Box style={boxStyling}>
      <Typography style={boxChildrenStyling}variant='h2'>Page not found</Typography>
      <p style={boxChildrenStyling}>The URL entered is invalid. Please check the URL</p>
      <Link style={boxChildrenStyling} to='/'>Back To Home Page</Link>
    </Box>
  );
};

export default PageNotFound;
