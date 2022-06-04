import { Popover, Typography } from '@mui/material';
import React from 'react';

const PopoverCom = ({profile, setProfile}) => {
    return (
        <Popover
        id='notification-modal'
        sx={{
            marginTop: '10px'
        }}
        open={profile}
        anchorEl={profile}
        onClose={() => setProfile(null)}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
    >
        <Typography sx={{ p: 2 }}>Profile</Typography>
    </Popover>
    );
};

export default PopoverCom;