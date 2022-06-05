import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { deepOrange, lightBlue } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import TimeLine from './TimeLine';

const data = [
    {
        name: '16/08',
        Earnings: 0,
        Expense: 0,
        amt: 2400,
    },
    {
        name: '17/08',
        Earnings: 5,
        Expense: 3,
        amt: 2210,
    },
    {
        name: '18/08',
        Earnings: 6,
        Expense: 1,
        amt: 2290,
    },
    {
        name: '19/08',
        Earnings: 8,
        Expense: 2,
        amt: 2000,
    },
    {
        name: '20/08',
        Earnings: 25,
        Expense: 8,
        amt: 2181,
    },
    {
        name: '21/08',
        Earnings: 9,
        Expense: 1,
        amt: 2500,
    },
    {
        name: '22/08',
        Earnings: 11,
        Expense: 5,
        amt: 2100,
    },
    {
        name: '23/08',
        Earnings: 24,
        Expense: 1,
        amt: 2100,
    },
];


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ModernSales() {


    return (
        <Box sx={{ flexGrow: 1, padding: '15px 0' }}>
            <Grid container spacing={5} className='modern_card' >
                <Grid item md={6} xs={9}>
                    <Item elevation={0} className='card_item h-100' >
                        <div className="d-flex content-between items-center">
                            <h3> Daily Activities </h3>
                            <IconButton> <MoreHorizIcon /> </IconButton>
                        </div>
                        <div>
                            <TimeLine />
                        </div>
                    </Item>
                </Grid>
                <Grid item md={6} xs={9}>
                    <Item className='card_item mb-20' sx={{ height: '100%' }} >
                        <div className="d-flex content-between items-center">
                            <h3> Sales Overview </h3>
                        </div>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis orientation="left" stroke="#8884d8" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Earnings" fill={lightBlue[300]} />
                                <Bar dataKey="Expense" fill={deepOrange[300]} />

                            </BarChart>
                        </ResponsiveContainer>
                    </Item>
                </Grid>

            </Grid>
        </Box >
    );
}
