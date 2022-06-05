import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia, Divider, IconButton } from '@mui/material';
import card from '../../images/card.jpg'
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import { deepOrange, lightBlue, teal } from '@mui/material/colors';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import avatar3 from '../../images/avatar3.jpg'
import { Area, AreaChart,  ResponsiveContainer, Tooltip } from 'recharts';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const data = [
    {
        name: 'Page A',
        uv: 10,
    },
    {
        name: 'Page B',
        uv: 60,
    },
    {
        name: 'Page C',
        uv: 30,
    },
    {
        name: 'Page D',
        uv: 65,
    },

];

export default function ModernBottom() {
    return (
        <Box sx={{ flexGrow: 1, padding: '15px 0' }}>
            <Grid container spacing={4} className='modern_card' >
                <Grid item md={4} xs={9}>
                    <Item elevation={0} className='card_item1  h-100' sx={{ padding: 0, overflow: 'hidden', borderRadius: '20px', textAlign: 'left' }} >
                        <Card className=' h-100'>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={card}
                            />
                            <CardContent>
                                <p className='d-flex items-center'>
                                    <QueryBuilderOutlinedIcon />
                                    <span style={{ marginLeft: '5px' }}>22 March, 2021</span>
                                </p>
                                <h3>
                                    Super awesome, React 18 is coming soon!
                                </h3>

                                <div className='dib' style={{ background: lightBlue[300] }}> Medium </div>
                                <div className='dib' style={{ background: deepOrange[300] }}> Low </div>
                                <Divider light sx={{ margin: '20px 0' }} />

                                <div className="d-flex content-between items-center">
                                    <div className="cardImage">
                                        <img src={avatar1} alt="" />
                                        <img src={avatar2} alt="" />
                                        <img src={avatar3} alt="" />
                                    </div>
                                    <IconButton > <ChatBubbleOutlineOutlinedIcon /> </IconButton>
                                </div>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item md={4} xs={9}>
                    <Item className='card_item h-100'>
                        <div>
                            <div className="d-flex content-between items-center">
                                <h3> Weekly Stats </h3>
                                <IconButton> <MoreHorizIcon /> </IconButton>
                            </div>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor: lightBlue[300] }}>
                                            <ShoppingCartOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Top sales" secondary="Johnathan Doe" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor: deepOrange[300] }}>
                                            <StarOutlineOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Best Seller" secondary="MaterialPro Admin" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor: teal['A700'] }}>
                                            <ChatBubbleOutlineOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Most Commented" secondary="Ample Admin" />
                                </ListItem>
                            </List>
                            <ResponsiveContainer width="100%" aspect={2}>
                                <AreaChart
                                    data={data}
                                >
                                    <Tooltip />
                                    <Area type="monotone" strokeWidth={3} dataKey="uv" stroke={lightBlue[300]} fill={lightBlue[50]} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Item>
                </Grid>

                <Grid item md={4} xs={9}>
                    <Item className='card_item h-100'>
                        <div>
                            <div className="d-flex content-between items-center">
                                <h3> MedicalPro Branding </h3>
                                <IconButton> <MoreHorizIcon /> </IconButton>
                            </div>
                            <small className='dib date' style={{ backgroundColor: lightBlue[50], color: lightBlue[300] }} >16 APR, 2021</small>

                            <div className="medicalPro d-flex items-center content-between">
                                <div>
                                    <p className="primary"> Due Date </p>
                                    <p className="secondary"> Oct 23, 2021 </p>
                                </div>

                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <p className="primary"> Due Date </p>
                                    <p className="secondary"> Oct 23, 2021 </p>
                                </div>

                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <p className="primary"> Due Date </p>
                                    <p className="secondary"> Oct 23, 2021 </p>
                                </div>
                            </div>

                            <h2 style={{ marginBottom: '5px' }}> Teams </h2>

                            <div
                                className='dib'
                                style={{
                                    background: lightBlue[300],
                                    padding: '3px 15px',
                                    margin: '5px',
                                    borderRadius: '5px',
                                    color: '#fff',
                                }}> Bootstrap </div>
                            <div
                                className='dib'
                                style={{
                                    background: deepOrange[300],
                                    padding: '3px 15px',
                                    margin: '5px',
                                    borderRadius: '5px',
                                    color: '#fff',
                                }}> Angular </div>
                            <Divider sx={{ margin: '20px 0' }} />

                            <div>
                                <h3 style={{ marginBottom: '5px' }}> Leaders </h3>
                                <div className="cardImage">
                                    <img src={avatar1} alt="" />
                                    <img src={avatar2} alt="" />
                                    <img src={avatar3} alt="" />
                                </div>
                            </div>
                            <Divider sx={{ margin: '20px 0' }} />
                            <div className="d-flex content-between items-center">
                                <Button variant='contained' color='third' disableElevation> Add </Button>
                                <span> 36 Recent Transactions </span>
                            </div>

                        </div>
                    </Item>
                </Grid>

            </Grid>
        </Box >
    );
}
