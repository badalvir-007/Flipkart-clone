// import React from 'react'
import { Fragment, useEffect } from "react";
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import  {getProducts} from '../../../redux/actions/productActions';
import {useDispatch , useSelector} from 'react-redux';

import { Box, styled } from "@mui/material";

const Component = styled(Box)`
     padding : 10px 10px ;
     background-color : #F2F2F2;
`

const Home = () => {

    const {products} = useSelector( (state) => state.getProducts);
    console.log(products);

    const dispatch =  useDispatch('');

    useEffect ( ()=> {
        dispatch( getProducts());
    }, [dispatch]);
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home;
