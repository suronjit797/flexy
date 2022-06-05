import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ToolBarCom from '../ToolBarCom/ToolBarCom';
import { Link, Route, Routes } from 'react-router-dom';
import './SideBar.css'

// import { primary } from '@mui/material/colors';

import logo from '../../images/logo.svg'
import SideBarItems from './SideBarItems';
import Modern from '../../Pages/Modern/Modern';
import useMediaQuery from '@mui/material/useMediaQuery';
const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SideBar() {
    const matches = useMediaQuery('(min-width:600px)');
    const [open, setOpen] = React.useState(true);
    const [search, setSearch] = React.useState(true);

    React.useEffect(() => {
        setOpen(matches)
    }, [matches])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="light" enableColorOnDark elevation={0}>
                <ToolBarCom open={open} setOpen={setOpen} search={search} setSearch={setSearch} />
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: 'transparent',
                        boxShadow: 'rgb(113 122 131 / 11%) 0px 7px 30px 0px'
                    },
                }}
                variant="persistent"
                anchor="left"
                hideBackdrop={true}
                open={open}
                elevation={6}
            >
                <Divider />
                <List>
                    <ListItem>
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </ListItem>
                </List>
                <SideBarItems />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />


                {/* routes */}
                    <Routes>
                        <Route path='/' element={<Modern />} />
                    </Routes>
            </Main>
        </Box>
    );
}
