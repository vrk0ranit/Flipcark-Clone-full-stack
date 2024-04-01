import React,{useState, useContext} from 'react'
import { Box, Button, Typography, Badge, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { DataContext  } from '../../context/DataProvider';

//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    // justifyContent: 'space-between',
    '& > *': {
    marginRight: '40px !important',
    fontSize: '16px',
    alignItems: 'center',
    // justifyContent: 'space-between',
    
 },
 [theme.breakpoints.down('md')]: {
    display: 'block'
 }
}))
 

const Container =  styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const LoginButton = styled(Button)`
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
`


const CustomButton = () => {
    
    const [open, setOpen] = useState(false);
    const { account, setAccount }= useContext(DataContext)

    const openDialog = () => {
        setOpen(true)
    }

    const { cartItems } = useSelector(state => state.cart);
    

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/>
                 :
                 <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                <ShoppingCartIcon/>
                </Badge>
                <Typography style={{ marginLeft: 10}}>
                    Cart
                </Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButton