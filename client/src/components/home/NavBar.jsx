import React from 'react'

import { Box, Typography, styled } from '@mui/material'

import { navData } from '../../constraints/data'

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    margin: '0px !important'
  }
}))
const Container = styled(Box)`
padding: 12px 8px;
text-align: center;
`

const Text = styled(Typography)`
 font-size: 14px;
 font-weight: 600;
 font-family: inherit;
`


const NavBar = () => {
  return (
    <Box style={{ background: '#fff' }}>
      <Component>
        {
          navData.map(data => (
            <Container>
              <img src={data.url} alt="nav" />
              <Text>{data.text}</Text>
            </Container>
          ))
        }
      </Component>
    </Box>
  )
}

export default NavBar