import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

import { buttonStyle, buttonTheme } from './buttonStyle';
import headerStyle from './headerStyle';

const LibraryHeader = ({ buttons, position, title }) => (
  <AppBar style={{ position }}>
    <Toolbar>
      <Typography variant="title" style={headerStyle}>
        {title}
      </Typography>
      <MuiThemeProvider theme={buttonTheme}>
        <div style={buttonStyle}>{buttons}</div>
      </MuiThemeProvider>
    </Toolbar>
  </AppBar>
);

LibraryHeader.propTypes = {
  buttons: PropTypes.object.isRequired, // eslint-disable-line
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default LibraryHeader;
