import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;
const Heading = styled(Typography)`
    color: #878787;
`;
const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6: {
        margin-bottom: 20px;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`

const TotalView = ({ cartItems }) => {
  return (
    <Box>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price ({cartItems?.length} item)
             <Price component="span">₹100</Price>
            </Typography>
            <Typography>Discount
             <Price component="span">-₹100</Price>
            </Typography>
            <Typography>Delivery Charges
             <Price component="span">₹100</Price>
            </Typography>
            <Typography component='h6'>Total Amount
             <Price component="span">₹100</Price>
            </Typography>
            <Discount>You Will Save ₹100 on this order</Discount>
        </Container>
    </Box>
  )
}

export default TotalView