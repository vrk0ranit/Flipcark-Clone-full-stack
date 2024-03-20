import React,{useState} from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//components
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
 display: flex;
 margin: 0 3% 0 auto;
 &>button, &> p, &> div{
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
 }
`
const Container =  styled(Box)`
 display: flex;
`;
const LoginButton = styled(Button)`
 color: #2874f0;
`


const CustomButton = () => {
    
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true)
    }

    return (
        <Wrapper>
            <Button onClick={() => openDialog()} style={{ 
                color: '#2874f0', 
                background: '#ffffff', 
                textTransform: 'none',
                 padding: '5px 40px',
                 borderRadius: 2,
                 boxShadow: 'none',
                 fontWeight: 600,
                 height: '32px',
                 }} variant='contained'>
                Login
            </Button>
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container>
                <ShoppingCartIcon/>
                <Typography>
                    Cart
                </Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButton