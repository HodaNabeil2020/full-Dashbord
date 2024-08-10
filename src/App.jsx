import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';

import { getDesignTokens } from './theme';
import { Outlet } from 'react-router-dom';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MiniDrawer() {
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "dark");
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (


    // eslint-disable-next-line react/jsx-no-undef
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />


        <TopBar handleDrawerOpen={handleDrawerOpen} open={open} setMode={setMode} />


        <SideBar handleDrawerClose={handleDrawerClose} open={open} />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />

        </Box>
      </Box>

    </ThemeProvider>

  );
}
