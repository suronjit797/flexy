import { Popover, Typography } from '@mui/material';
import React from 'react';

const PopoverCom = ({notification, setNotification}) => {
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
        <Typography sx={{ p: 2 }}>notification</Typography>
    </Popover>
    );
};

export default PopoverCom;