import React,{useState} from 'react'
import { Box, Button, styled } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction'



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    borderRadius: '2px',
    height: 50,
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = product;

    const [quantity, setQuantity] = useState(1);
        
    
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = async () => {
    //    const stripe = await loadStripe("pk_test_51P16H7SJIf0Hm6Uqk4IajA9qJS3xxdTi5JiKLuojsPsLzZqAjVoFUrj4lhaUt664mtOdHoILsWpVqwGO5Oy40LOE00QAci3uws");

    //    const headers = {
    //     "Content-Type": "application/json"
    //    }
    //    const response = await fetch(`$url`)
    }
    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0',
                width: '90%',
            }}>
                <Image src={product.url} alt="product" />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }} ><Cart />Add To Cart</StyledButton>
            <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb641b' }}><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem