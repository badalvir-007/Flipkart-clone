import { Typography , Box , Button , styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState ,useContext } from 'react';
import  { DataContext } from '../../context/DataProvider';
import Profile from './Profilr';

//components
import LoginDialog from '../gin/LoginDialog';

const Wrapper = styled(Box)`
    display: flex;
    margin : 0 3% 0  auto;
    & > button , & > p , & > div{
        margin-right: 40px;
        font-size: 14px;
        align-items: center;
    }
`;

const Container  = styled(Box)`
    display : flex;
`;

const LoginButton = styled(Button)`
    color : #2874f0;
    background : #FFFFFF;
    text-transform : none;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow: none;
    font-weight :  600;
`;

const CustomButton = () => {

    const [open , setOpen]= useState(false);
    const {account} = useContext(DataContext);

    const openDialog= () =>{
        setOpen(true);
    }
  return (
   <Wrapper>
       
       {
        account ? <Profile account = {account}/> :

        <LoginButton variant="contained"  onClick={()=> openDialog()}>Login</LoginButton>
       } 
       
        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>

        <Typography style={{marginTop:3}}>More</Typography>

        <Container>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open = {open} setOpen={setOpen}/>
   </Wrapper>
  )
}

export default CustomButton;
