import { Accordion, AccordionSummary, List, ListItem, ListItemButton, AccordionDetails } from '@mui/material';
import React from 'react';
import { lightBlue } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import WifiTetheringErrorRoundedOutlinedIcon from '@mui/icons-material/WifiTetheringErrorRoundedOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const SideBarItems = () => {

    const navLinkStyle = {
        display: 'block',
        width: '100%',
        borderRadius: '5px',
        color: '#595555',
        textTransform: 'capitalize',
        transition: '.5s ease',
        overflow: 'hidden'
    }

    const navLinkActive = {
        backgroundColor: lightBlue[300],
        color: '#fff',

    }

    const dashboardList = [
        {
            id: 1,
            name: 'Modern',
            icon: <  DriveEtaOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/'
        },
        {
            id: 2,
            name: 'Analytical',
            icon: <  PieChartOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/dashboard2'
        },
        {
            id: 3,
            name: 'eCommerce',
            icon: <  ShoppingBagOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/dashboard3'
        },
    ]
    const pages = [
        {
            id: 1,
            name: 'Alert',
            icon: <  InfoOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/alert'
        },
        {
            id: 2,
            name: 'User Profile',
            icon: <  PersonOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/user-profile'
        },
        {
            id: 3,
            name: 'Quill Editor',
            icon: <  BorderColorOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/quill-editor'
        },
        {
            id: 4,
            name: 'Tree view',
            icon: <  AccountTreeOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/tree-view'
        },
        {
            id: 5,
            name: 'Pricing',
            icon: <  MoneyOffOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/pricing'
        },
        {
            id: 6,
            name: 'Typography',
            icon: <  BrushOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/typography'
        },
        {
            id: 7,
            name: 'Feature Icons',
            icon: <  HistoryEduOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/feature-icons'
        },
        {
            id: 8,
            name: 'Timeline',
            icon: <  AccessTimeOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/timeline'
        },

    ]
    const apps = [
        {
            id: 1,
            name: 'Chat',
            icon: <  ChatBubbleOutlineOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/chat'
        },
        {
            id: 2,
            name: 'Note',
            icon: <  ContentPasteOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/not'
        },
        {
            id: 3,
            name: 'Mail',
            icon: <  InboxOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/mail'
        },
        {
            id: 4,
            name: 'Calendar',
            icon: <  CalendarTodayOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/calendar'
        },

    ]
    const forms = [
        {
            id: 1,
            name: 'Form Layout',
            icon: <StickyNote2OutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/chat'
        },
        {
            id: 2,
            name: 'Form custom',
            icon: <  PhotoFilterOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/not'
        },
        {
            id: 3,
            name: 'Form wizard',
            icon: <  ViewInArOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/mail'
        }
    ]
    const formElements = [
        {
            id: 1,
            name: 'Auto complete',
            icon: <  ExploreOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/auto-complete'
        },
        {
            id: 2,
            name: 'Buttons',
            icon: <  ViewInArOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/buttons'
        },
        {
            id: 3,
            name: 'Checkbox',
            icon: <  FactCheckOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/checkbox'
        },
        {
            id: 4,
            name: 'Radio',
            icon: <  AddTaskOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/radio'
        },
        {
            id: 5,
            name: 'Date Time',
            icon: <  CalendarTodayOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/date-time'
        },
        {
            id: 6,
            name: 'Slider',
            icon: <  LinearScaleOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/slider'
        },
        {
            id: 7,
            name: 'Switch',
            icon: <  ToggleOffOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/switch'
        },
    ]
    const table = [
        {
            id: 1,
            name: 'basic table',
            icon: <AlbumOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/basic-table'
        },
        {
            id: 2,
            name: 'pagination table',
            icon: <AlbumOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/pagination-table'
        },
        {
            id: 3,
            name: 'enhanced table',
            icon: <AlbumOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/enhanced-table'
        },
        {
            id: 4,
            name: 'collapsible table',
            icon: <AlbumOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/collapsible-table'
        },
        {
            id: 5,
            name: 'fixed header table',
            icon: <AlbumOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/fixed-header-table'
        },
    ]
        const chart = [
        {
            id: 1,
            name: 'Line chart',
            icon: <SsidChartOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/line-chart'
        },
        {
            id: 2,
            name: 'Gredient chart',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height='18px' width='18px' style={{ marginRight: '15px' }}  viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>,
            link: '/gradient-chart'
        },
        {
            id: 3,
            name: 'Doughnut & pie',
            icon: <BarChartOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/doughnut-pie'
        },
        {
            id: 4,
            name: 'Area chart',
            icon: <DonutSmallOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/area-chart'
        },
        {
            id: 5,
            name: 'Column chart',
            icon: <CircleOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/colum-chart'
        },
        {
            id: 6,
            name: 'Candlestick chart',
            icon: <WifiTetheringErrorRoundedOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/candlestick-chart'
        },
        {
            id: 7,
            name: 'Redialbar & radar',
            icon: <CircleOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/redalbar-radar'
        },
    ]
    const auth = [
        {
            id: 1,
            name: 'Login',
            icon: <LoginOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/login'
        },

        {
            id: 2,
            name: 'Register',
            icon: <PersonAddAltOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/register'
        },
        {
            id: 3,
            name: 'Reset password',
            icon: <CachedOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/reset-password'
        },
        {
            id: 4,
            name: 'Error',
            icon: <ErrorOutlineOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />,
            link: '/error'
        },

    ]







    return (
        <List>
            {/********************* dashboard *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > Dashboard </ListItem>
            {/* dashboard link items */}

            {
                dashboardList.map(item => (
                    <ListItem sx={{ paddingTop: 0 }} key={item.id}>
                        <NavLink to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                            <ListItemButton sx={{ padding: '10px 20px' }}>
                                <div className="d-flex">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }

            {/********************* apps *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > apps </ListItem>
            {/* app link items */}

            {
                apps.map(item => (
                    <ListItem sx={{ paddingTop: 0 }} key={item.id}>
                        <NavLink to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                            <ListItemButton sx={{ padding: '10px 20px' }}>
                                <div className="d-flex">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }

            {/* dropdown */}
            <ListItem sx={{ paddingTop: 0 }}>
                <Accordion sx={{ boxShadow: 'none', width: '100%' }}>
                    <ListItemButton sx={{ padding: 0, display: 'block' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ width: '100%', minHeight: 'auto !important' }}
                        >
                            <div className="d-flex">
                                <GroupOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />
                                Customers
                            </div>
                        </AccordionSummary>
                    </ListItemButton>
                    <AccordionDetails>
                        <NavLink to='/list' style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive, marginBottom: '10px' } : { ...navLinkStyle, marginBottom: '10px' }}>
                            <ListItemButton >
                                <div className="d-flex">
                                    <FormatListBulletedOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />
                                    Lists
                                </div>
                            </ListItemButton>
                        </NavLink>
                        <NavLink to='/edit' style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive, marginBottom: '10px' } : { ...navLinkStyle, marginBottom: '10px' }}>
                            <ListItemButton >
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" height='18px' width='18px' style={{ marginRight: '15px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>

            </ListItem>



            {/********************* pages *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > pages </ListItem>

            {/* dropdown */}
            <ListItem sx={{ paddingTop: 0 }}>
                <Accordion sx={{ boxShadow: 'none', width: '100%' }}>
                    <ListItemButton sx={{ padding: 0, display: 'block' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ width: '100%', minHeight: 'auto !important' }}
                        >
                            <div className="d-flex">
                                <ShoppingCartOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />
                                Shop
                            </div>
                        </AccordionSummary>
                    </ListItemButton>
                    <AccordionDetails>
                        <NavLink to='/list' style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive, marginBottom: '10px' } : { ...navLinkStyle, marginBottom: '10px' }}>
                            <ListItemButton >
                                <div className="d-flex">
                                    <FormatListBulletedOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />
                                    Listing
                                </div>
                            </ListItemButton>
                        </NavLink>
                        <NavLink to='/edit' style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive, marginBottom: '10px' } : { ...navLinkStyle, marginBottom: '10px' }}>
                            <ListItemButton >
                                <div className="d-flex">
                                    <StickyNote2OutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />
                                    Detail
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>

            </ListItem>

            {/* pages link items */}
            {
                pages.map(item => (
                    <ListItem sx={{ paddingTop: 0 }} key={item.id}>
                        <NavLink to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                            <ListItemButton sx={{ padding: '10px 20px' }}>
                                <div className="d-flex">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }

            {/********************* forms *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > forms </ListItem>

            {/* dropdown */}
            <ListItem sx={{ paddingTop: 0 }}>
                <Accordion sx={{ boxShadow: 'none', width: '100%' }}>
                    <ListItemButton sx={{ padding: 0, display: 'block' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ width: '100%', minHeight: 'auto !important' }}
                        >
                            <div className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height='18px' width='18px' style={{ marginRight: '15px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                Form Elements
                            </div>
                        </AccordionSummary>
                    </ListItemButton>
                    <AccordionDetails>

                        {
                            formElements.map(item => (
                                <NavLink key={item.id} to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive, marginBottom: '10px' } : { ...navLinkStyle, marginBottom: '10px' }}>
                                    <ListItemButton >
                                        <div className="d-flex">
                                            {item.icon}
                                            {item.name}
                                        </div>
                                    </ListItemButton>
                                </NavLink>
                            ))
                        }

                    </AccordionDetails>
                </Accordion>

            </ListItem>

            {/* pages link items */}
            {
                forms.map(item => (
                    <ListItem sx={{ paddingTop: 0 }} key={item.id}>
                        <NavLink to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                            <ListItemButton sx={{ padding: '10px 20px' }}>
                                <div className="d-flex">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }

            {/********************* Table *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > table </ListItem>

            {/* dropdown */}
            <ListItem sx={{ paddingTop: 0 }}>
                <Accordion sx={{ boxShadow: 'none', width: '100%' }}>
                    <ListItemButton sx={{ padding: 0, display: 'block' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ width: '100%', minHeight: 'auto !important' }}
                        >
                            <div className="d-flex">
                                <TableChartOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />
                                Tables
                            </div>
                        </AccordionSummary>
                    </ListItemButton>
                    <AccordionDetails>

                        {
                            table.map(item => (
                                <NavLink key={item.id} to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive, marginBottom: '10px' } : { ...navLinkStyle, marginBottom: '10px' }}>
                                    <ListItemButton >
                                        <div className="d-flex">
                                            {item.icon}
                                            {item.name}
                                        </div>
                                    </ListItemButton>
                                </NavLink>
                            ))
                        }

                    </AccordionDetails>
                </Accordion>

            </ListItem>

            {/********************* Widget *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > Widget </ListItem>

            <ListItem sx={{ paddingTop: 0 }}>
                <NavLink to='/widget-app' style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                    <ListItemButton sx={{ padding: '10px 20px' }}>
                        <div className="d-flex">
                            <AllInboxOutlinedIcon sx={{ marginRight: '15px' }} fontSize='small' />

                            Widget App
                        </div>
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem sx={{ paddingTop: 0 }}>
                <NavLink to='/widget-feed' style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                    <ListItemButton sx={{ padding: '10px 20px' }}>
                        <div className="d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height='18px' width='18px' style={{ marginRight: '15px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Widget Feed
                        </div>
                    </ListItemButton>
                </NavLink>
            </ListItem>



            {/********************* Charts *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > Charts </ListItem>

            {/* pages link items */}
            {
                chart.map(item => (
                    <ListItem sx={{ paddingTop: 0 }} key={item.id}>
                        <NavLink to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                            <ListItemButton sx={{ padding: '10px 20px' }}>
                                <div className="d-flex">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }

            {/********************* authentication *******************/}
            {/* header */}
            <ListItem className='nav_list-header' > authentication </ListItem>

            {/* pages link items */}
            {
                auth.map(item => (
                    <ListItem sx={{ paddingTop: 0 }} key={item.id}>
                        <NavLink to={item.link} style={isActive => isActive.isActive ? { ...navLinkStyle, ...navLinkActive } : navLinkStyle}>
                            <ListItemButton sx={{ padding: '10px 20px' }}>
                                <div className="d-flex">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }






        </List>
    );
};

export default SideBarItems;