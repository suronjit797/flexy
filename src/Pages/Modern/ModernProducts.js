import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormControl, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { deepOrange, lightBlue, grey, yellow, pink, teal } from '@mui/material/colors';
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import avatar3 from '../../images/avatar3.jpg'
import avatar4 from '../../images/avatar4.jpg'
import avatar5 from '../../images/avatar5.jpg'


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];
const COLORS = [lightBlue[300], lightBlue[50], deepOrange[300]];


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const rows = [
    {
        avatar: <img src={avatar1} className='tableAvatar' alt='avatar1' />,
        assigned: 'Sunil Joshi',
        name: 'Elite Admin',
        priority: 'Low',
        budget: '$3.9k'
    },
    {
        avatar: <img src={avatar2} className='tableAvatar' alt='avatar2' />,
        assigned: 'Andrew McDownland',
        name: 'Real Homes WP Theme',
        priority: 'Medium',
        budget: '$24.5k'
    },
    {
        avatar: <img src={avatar3} className='tableAvatar' alt='avatar3' />,
        assigned: 'Christopher Jamil',
        name: 'MedicalPro WP Theme',
        priority: 'Heigh',
        budget: '$12.8k'
    },
    {
        avatar: <img src={avatar4} className='tableAvatar' alt='avatar4' />,
        assigned: 'Nirav Joshi',
        name: 'Hosting Press HTML',
        priority: 'Critical',
        budget: '$2.4k'
    },
    {
        avatar: <img src={avatar5} className='tableAvatar' alt='avatar5' />,
        assigned: 'Micheal Doe',
        name: 'Helping Hands Theme',
        priority: 'Moderate',
        budget: '$9.3k'
    },
];

const backgroundColor = (data) =>{
    if(data === 'Low'){
        return lightBlue[300]
    }else if(data === 'Medium'){
        return deepOrange[300]
    }else if(data=== 'Heigh'){
        return yellow[600]
    }else if(data=== 'Critical'){
        return pink[400]
    }else if(data=== 'Moderate'){
        return teal['A700']
    }
}


export default function ModernProducts() {
    const [year, setYear] = React.useState('March 2021');


    return (
        <Box sx={{ flexGrow: 1, padding: '15px 0' }}>
            <Grid container spacing={5} className='modern_card' >
                <Grid item md={4}>
                    <Item elevation={0} className='card_item h-100' >

                        <div className="d-flex content-between ">
                            <h2> Total Sales </h2>
                            <FormControl sx={{ width: '120px' }}>
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

                        <div className="d-flex content-between items-center">
                            <h4> Sales Yearly </h4>
                            <h2> 8,364,398 </h2>
                        </div>

                        <ResponsiveContainer aspect={1}>
                            <PieChart width='100%' height='100%' onMouseEnter={'onPieEnter'}>
                                <Pie
                                    data={data}
                                    innerRadius='50%'
                                    outerRadius='80%'
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Item>
                </Grid>
                <Grid item md={8}>
                    <Item className='card_item mb-20' >
                        <div className="d-flex content-between">
                            <h2> Product Performance </h2>
                            <FormControl sx={{ width: '120px' }}>
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

                        <TableContainer component={Paper}>
                            <Table aria-label="simple table" sx={{ verticalAlign: 'middle' }}>
                                <TableHead>
                                    <TableRow >
                                        <TableCell sx={{ color: grey[600] }}> <b>Assigned</b>  </TableCell>
                                        <TableCell sx={{ color: grey[600] }}> <b>Name</b> </TableCell>
                                        <TableCell sx={{ color: grey[600] }}> <b>Priority</b> </TableCell>
                                        <TableCell sx={{ color: grey[600] }}> <b>Budget</b> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <b className='d-flex items-center'>
                                                    {row.avatar}
                                                    {row.assigned}
                                                </b>
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>
                                                <small className='dib table_span' style={{ backgroundColor: backgroundColor(row.priority) }}> {row.priority} </small>
                                            </TableCell>
                                            <TableCell>{row.budget}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>





                    </Item>
                </Grid>

            </Grid>
        </Box >
    );
}
