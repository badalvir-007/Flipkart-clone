// import React from 'react';
import { InputBase , Box , styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import styled from '@emotion/styled';


const  SearchConatainer = styled(Box)`
background : white;
width : 38%;
border-radius : 2px;
margin-left: 10px;
display: flex;
`;


const InputSearchBase =  styled(InputBase)`
     padding:left: 20px;
     width: 100%;
`;


const SearchIconWrapper = styled(Box)`
     color :blue;
     padding : 5px;
     display : flex;
`;


const Search = () => {
  return (
    <SearchConatainer>
        <InputSearchBase  
            placeholder="search for products , brands and more"
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>

    </SearchConatainer>
  )
}

export default Search;
