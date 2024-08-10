

import Divider from '@mui/material/Divider';

import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import { Avatar, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';

import { useNavigate, useLocation } from 'react-router-dom';
// 
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChartIcon from '@mui/icons-material/BarChart';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ReceiptIcon from '@mui/icons-material/Receipt';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
// eslint-disable-next-line no-unused-vars
const Array1 = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/" },
    { text: "Manage Team", icon: <GroupIcon />, path: "/team" },
    {
        text: "Contacts Information",
        icon: <PermContactCalendarIcon />,
        path: "/contacts",
    },
    {
        text: "Invoices Balances",
        icon: <ReceiptIcon />,
        path: "/invoices",
    },
];

// eslint-disable-next-line no-unused-vars
const Array2 = [
    { text: "Profile Form", icon: <PersonIcon />, path: "/form" },
    { text: "Calendar", icon: < CalendarMonthIcon />, path: "/calendar" },
    {
        text: "FAQ Page",
        icon: <QuestionMarkIcon />,
        path: "/faq",
    },
];

// eslint-disable-next-line no-unused-vars
const Array3 = [
    { text: "Bar Chart", icon: <BarChartIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineIcon />, path: "/line" },
    { text: "Geography Chart", icon: <FmdGoodIcon />, path: "/geography" },
];



// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
    // @ts-ignore
    const navigate = useNavigate();
    const lacation = useLocation()
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.
                        // @ts-ignore
                        direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>


            <Avatar sx={{
                my: 1, mx: "auto", width: open ? "88px" : "44px",
                height: open ? "88px" : "44px",
                border: "2px solid #d3c9c9",
                transition: "0.4s"

            }} alt="Remy Sharp" src="https://img.freepik.com/free-photo/medium-shot-woman-covered-with-blanket_23-2149172499.jpg?t=st=1719744315~exp=1719747915~hmac=b521e6a0dcad937b5a71537191c2334a79c07039385a3ea8fdc578039d608ef9&w=826" />
            <Typography sx={{ mx: "auto", fontSize: open ? 20 : 0, transition: "0.4s" }} > Hoda </Typography>
            <Typography sx={{ mx: "auto", fontSize: open ? 18 : 0, transition: "0.4s" }} > admain </Typography>







            <Divider />
            <List>
                {Array1.map((item, index) => (


                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>

                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton

                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: lacation.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[700] : grey[300] : ""
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>

                        </Tooltip>

                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array2.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>


                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton
                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: lacation.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[700] : grey[300] : ""
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>

                        </Tooltip>

                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                {Array3.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>

                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton

                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: lacation.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[700] : grey[300] : ""
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>

                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
}

export default SideBar;
