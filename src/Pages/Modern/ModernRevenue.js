import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormControl, MenuItem, Select, } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { deepOrange, lightBlue } from '@mui/material/colors';

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

export default function ModernRevenue() {
    const [year, setYear] = React.useState('March 2021');


    return (
        <Box sx={{ flexGrow: 1, padding: '15px 0' }}>
            <Grid container spacing={5} className='modern_card' >
                <Grid item md={8} xs={9}>
                    <Item elevation={0} className='card_item h-100' >

                        <div className="d-flex content-between ">
                            <h2> Revenue Updates </h2>
                            <FormControl sx={{ width: '150px' }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={year}
                                    onChange={e => setYear(e.target.value)}
                                >
                                    <MenuItem value='March 2021'>March 2021</MenuItem>
                                    <MenuItem value='April 2021'>April 2021</MenuItem>
                                    <MenuItem value='May 2021'>May 2021</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <ResponsiveContainer aspect={2}>
                            <LineChart
                                strokeWidth={0}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" strokeWidth={3} dataKey="Earnings" stroke={lightBlue[300]} activeDot={{ r: 8 }} />
                                <Line type="monotone" strokeWidth={3} dataKey="Expense" stroke={deepOrange[300]} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Item>
                </Grid>
                <Grid item md={4} xs={9}>
                    <Item className='card_item mb-20' sx={{ backgroundColor: lightBlue[300] }} >
                        <h3 className='text-white' style={{ marginTop: '0' }}> Monthly Earnings </h3>
                        <ResponsiveContainer width='100%' aspect={3}>
                            <BarChart
                                data={data}
                                strokeWidth={0}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip itemStyle={{ color: 'black' }} />
                                <Bar dataKey="Earnings" fill={lightBlue[100]} barSize={4} />
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="text-white">
                            <h2 className='dib' style={{ marginBottom: '0' }}>$39,358</h2> <b> +9 this week </b>
                        </div>
                    </Item>
                    <Item className='card_item' sx={{ backgroundColor: deepOrange[300] }} >
                        <h3 className='text-white' style={{ marginTop: '0' }}> Customer </h3>
                        <ResponsiveContainer width='100%' aspect={3}>
                            <LineChart data={data}>
                                <Tooltip itemStyle={{ color: 'black' }} />
                                <Line
                                    type="monotone"
                                    dataKey="Expense"
                                    stroke={deepOrange[50]}
                                    dot={1}
                                    activeDot={{ r: 8 }}
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        <div className="text-white">
                            <h2 className='dib' style={{ marginBottom: '0' }}>750</h2> <b> +9 this week </b>
                        </div>
                    </Item>
                </Grid>

            </Grid>
        </Box >
    );
}
