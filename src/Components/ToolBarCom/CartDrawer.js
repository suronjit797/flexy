import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'; import { Button, Drawer } from '@mui/material';
import ShoppingItems from './ShoppingItems';
import cart1 from '../../images/cart1.jpg'
import cart2 from '../../images/cart2.jpg'
import cart3 from '../../images/cart3.jpg'



export default function CartDrawer({ cart, setCart }) {

    const cartItems = [
        {
            image: cart1,
            name: ' butterscotch ice-cream ',
            category: 'Milk product',
            price: 250,
            quantity: 0
        },
        {
            image: cart2,
            name: ' Supreme fresh tomato ',
            category: 'Vegetable Item',
            price: 450,
            quantity: 0
        },
        {
            image: cart3,
            name: 'Red color candy',
            category: 'Food Item',
            price: 190,
            quantity: 0
        },
    ]

    return (
        <div>

            <React.Fragment>
                <Drawer
                    anchor='right'
                    open={cart}
                    onClose={() => setCart(false)}
                    onOpen={() => setCart(true)}
                >

                    <Box
                        sx={{ maxWidth: 380, padding: '10px 20px' }}
                        role="presentation"
                        onClick={() => setCart(false)}
                        onKeyDown={() => setCart(false)}
                    >

                        <div className="d-flex items-center content-between mb-20">
                            <h3> Shopping Cart </h3>
                            <CancelOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => setCart(false)} />
                        </div>

                        {
                            cartItems.map((item, index) => (
                                <>
                                    <ShoppingItems cartItem={item} />
                                    <Divider sx={{ margin: '20px 0' }} />

                                </>

                            ))
                        }


                        <div className="d-flex items-center content-between">
                            <div className="text"> Sub Total </div>
                            <div className="text"> $809 </div>
                        </div>
                        <div className="d-flex items-center content-between">
                            <div className="text"> Total </div>
                            <div className="text"> $809 </div>
                        </div>

                        <Button variant="contained" color='third' disableElevation
                        sx={{
                            marginTop: '10px',
                            width: '100%'
                        }}
                        >
                            Place order
                        </Button>

                    </Box>
                </Drawer>

            </React.Fragment>

        </div>
    );
}
