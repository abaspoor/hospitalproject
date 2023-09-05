import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from "./layouts/main";
import {AuthProvider} from "./hooks/useAuth";
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
    const theme = createTheme();
    const user = JSON.parse(localStorage.getItem('signed-user'));
  return (
      <AuthProvider user={user}>
          <SnackbarProvider maxSnack={3}>
              <Router>
                  <Main/>
              </Router>
          </SnackbarProvider>
      </AuthProvider>
  );
}

export default App;
