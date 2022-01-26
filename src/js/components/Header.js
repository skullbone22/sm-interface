import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LoginIcon from '@mui/icons-material/Login';

const Header = ({ setUrl, pagetitle }) => {

  return (
    <div>
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <span style={title}>
            StowMarines Interface - {pagetitle}<br />
            <i style={{ fontSize: '13px' }}>V0.1 Beta</i>
          </span>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={3}>
          <button style={menuButton} onClick={() => setUrl('/index.html')}>
            <HomeIcon />
          </button>
          &nbsp; &nbsp;
          <button style={menuButton} onClick={() => setUrl('/settings')}>
            <SettingsIcon />
          </button>
          &nbsp; &nbsp;
          <button style={menuButton} onClick={() => setUrl('/orbat')}>
            <MilitaryTechIcon />
          </button>
          &nbsp; &nbsp;
          <button style={menuButton} onClick={() => setUrl('/login')}>
            <LoginIcon />
          </button>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

const title = {
  fontSize: '20px',
  fontFamily: 'Lato',
};


const menuButton = {
  border: 'none',
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0)',
};

export default Header;
