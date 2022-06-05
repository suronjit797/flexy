import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1, padding: '15px 0' }}>
            <Grid container spacing={5} className='modern_card' >
                <Grid item md={5}>
                    <Item elevation={0} className='card_item before' >
                        <Box sx={{ position: 'relative' }}>
                            <div>
                                Congratulation Julia
                                <h1>$39,358 +9%</h1>
                                <Button variant='contained' disableElevation color='fourth' > Download </Button>
                            </div>
                        </Box>
                    </Item>
                </Grid>
                <Grid item md={3}>
                    <Item className='card_item'>
                        <div>
                            <div className="d-flex purchase_Card">
                                <h4>Purchases</h4>
                                <Button variant='contained' disableElevation color='third' > <ShoppingBagOutlinedIcon /> </Button>
                            </div>
                            <h1 style={{ marginBottom: '0' }}>2,367</h1>
                            <small> Monthly Sales </small>
                        </div>
                    </Item>
                </Grid>
                <Grid item md={4}>
                    <Item className='card_item'>
                        <div>
                            <div className="d-flex purchase_Card">
                                <h4>Total Earnings</h4>
                                <Button variant='contained' disableElevation color='fourth' > <MoneyOffOutlinedIcon /> </Button>
                            </div>
                            <h1 style={{ marginBottom: '0' }}> $93,438.78 </h1>
                            <small> Monthly Revenue </small>
                        </div>
                    </Item>
                </Grid>

            </Grid>
        </Box >
    );
}
