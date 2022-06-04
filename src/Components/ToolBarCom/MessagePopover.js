import { Popover, Typography } from '@mui/material';
import React from 'react';

const PopoverCom = ({message, setMessage}) => {
    return (
        <Popover
        id='notification-modal'
        sx={{
            marginTop: '10px'
        }}
        open={!!message}
        anchorEl={message}
        onClose={() => setMessage(false)}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
    >
        <Typography sx={{ p: 2 }}>message</Typography>
    </Popover>
    );
};

export default PopoverCom;