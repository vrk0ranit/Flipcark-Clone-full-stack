import React from 'react'
import {InputBase, Box, styled} from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const SearchContainer = styled(Box)`
background: #fff;
width: 38%;
broder-radius: 2px;
margin-left: 10px;
display: flex;
`;
const InputSearchBase = styled(InputBase)`
 padding-left: 20px;
 width: 100%;
 font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
 color: blue;
 padding: 5px;
 display: flex;
`

const Search = () => {
  return (
     <SearchContainer>
         <InputSearchBase
          placeholder='Search for products brands and more'
         />
         <SearchIconWrapper>
            <ManageSearchIcon/>
         </SearchIconWrapper>
     </SearchContainer>
  )
}

export default Search