import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Avatar, Badge, Button, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import user from '../../images/user.jpg'
import NotificationPopover from './NotificationPopover';
import MessagePopover from './MessagePopover';
import ProfilePopover from './ProfilePopover';
import CartDrawer from './CartDrawer';

const ToolBarCom = ({ open, setOpen, search, setSearch }) => {

    const [notification, setNotification] = React.useState(false)
    const [message, setMessage] = React.useState(false)
    const [profile, setProfile] = React.useState(false)
    const [cart, setCart] = React.useState(false)


    return (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(!open)}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <IconButton
                sx={{
                    margin: '0 10px'
                }}
                color="inherit"
                aria-label="open drawer"
                onClick={() => setSearch(!search)}
                edge="start"
            >
                <SearchIcon />
            </IconButton>
            <div style={{ marginLeft: 'auto', borderRight: '1.5px solid rgba(148, 157, 178, .3)', display: 'flex' }}>
                <IconButton
                    sx={{
                        margin: '0 5px'
                    }}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setCart(!cart)}
                    edge="start"
                >
                    <ShoppingCartOutlinedIcon />
                    <CartDrawer cart={cart} setCart={setCart} />
                </IconButton>
                <IconButton
                    sx={{
                        margin: '0 5px'
                    }}
                    color="inherit"
                    onClick={e => setMessage(e.currentTarget)}
                    edge="start"
                >
                    <Badge color="third" variant="dot">
                        <ChatBubbleOutlineOutlinedIcon />
                    </Badge>
                </IconButton>
                <MessagePopover message={message} setMessage={setMessage}/>

                <div>
                    <IconButton
                        sx={{
                            margin: '0 5px'
                        }}
                        color="inherit"
                        onClick={e => setNotification(e.currentTarget)}
                        edge="start"
                    >
                        <Badge color="fourth" variant="dot">
                            <NotificationsOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <NotificationPopover notification={notification} setNotification={setNotification}/>

                </div>
            </div>
            <Button 
            variant="light" 
            sx={{ textTransform: 'capitalize', paddingLeft: '10px', paddingRight: '5px', margin: '0 10px' }}
            onClick={e => setProfile(e.currentTarget)}
            >
                <Avatar
                    alt="Remy Sharp"
                    src={user}
                    sx={{ width: 30, height: 30, marginRight: '10px' }}
                />
                <Typography> Hi, <b>Juila</b> </Typography>
                <KeyboardArrowDownOutlinedIcon />
            </Button>
            <ProfilePopover profile={profile} setProfile={setProfile}/>






        </Toolbar >
    );
};

export default ToolBarCom;