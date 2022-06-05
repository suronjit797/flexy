import { Avatar, Box, Button, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText, Popover } from '@mui/material';
import {  yellow } from '@mui/material/colors';
import React from 'react';

import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import avatar3 from '../../images/avatar3.jpg'
import avatar4 from '../../images/avatar4.jpg'



const notificationData = [
    {
        avatar: <img src={avatar1} className='tableAvatar' alt='avatar1' />,
        name: 'Roman Joined the Team!',
        message: 'Congratulation him',
        time: '11:12 PM'
    },
    {
        avatar: <img src={avatar2} className='tableAvatar' alt='avatar2' />,
        name: 'New message reveived',
        message: 'Congratulation!',
        time: '11:12 PM'
    },
    {
        avatar: <img src={avatar3} className='tableAvatar' alt='avatar3' />,
        name: 'New payment received',
        message: 'Congratulation!',
        time: '11:12 PM'
    },
    {
        avatar: <img src={avatar4} className='tableAvatar' alt='avatar4' />,
        name: 'Jolly completed task',
        message: 'Congratulation!',
        time: '11:12 PM'
    },
];

const PopoverCom = ({ notification, setNotification }) => {
    return (
        <Popover
            id='notification-modal'
            sx={{
                marginTop: '10px'
            }}
            open={!!notification}
            anchorEl={notification}
            onClose={() => setNotification(false)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 360, p: 3 }}>
                <div>
                    <h4 className='dib'> Notification</h4>
                    <Chip sx={{ marginLeft: '5px', backgroundColor: yellow[700], color: '#fff' }} label="5 new" onClick={''} />
                </div>

                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {
                        notificationData.map((notice, index) => (
                            <div key={index}>
                                <ListItem key={index} sx={{ alignItems: 'center' }} >
                                    <ListItemAvatar>
                                        <Avatar> {<b>{notice.avatar}</b>} </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={notice.name} secondary={notice.message} />
                                </ListItem>
                                <Divider />
                            </div>
                        ))
                    }
                </List>
                <Button variant='contained' color='third' sx={{ width: '100%' }} disableElevation> See all notification </Button>
            </Box>
        </Popover>
    );
};

export default PopoverCom;