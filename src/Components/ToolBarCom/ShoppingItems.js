import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, ButtonGroup } from '@mui/material';



export default function ShoppingItems({ cartItem }) {
    const theme = useTheme();

    console.log(cartItem.quantity);

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', boxShadow: 'none' }}>
            <CardMedia
                component="img"
                sx={{ width: '100px', height: '100px', marginRight: '15px' }}
                image={cartItem.image}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <h4 className='my-0'> {cartItem.name} </h4>
                <p className='my-0'> {cartItem.category} </p>
                <ButtonGroup variant="outlined" color='third' aria-label="outlined button group">
                    <Button onClick={() => cartItem.quantity - 1}> + </Button>
                    <Button> {cartItem.quantity} </Button>
                    <Button onClick={() => cartItem.quantity + 1}> - </Button>
                </ButtonGroup>
                <b> ${cartItem.price} </b>

            </Box>
        </Card>
    );
}
