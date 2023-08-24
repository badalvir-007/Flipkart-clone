import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { useState , useContext } from 'react';

import { autheticateSignup , autheticateLogin } from '../../service/api';
import {DataContext} from '../../context/DataProvider';


const Component = styled(Box)`
    height: 70vh;
    width : 90vh;
`;

const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height : 100%;
    width : 40%;
    padding: 45px 35px;

`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding  25px 35px;
    flex : 1;
    & div , & > button , & p {
        marginTop : 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform : none;
    background: #FB641B;
    color : #fff;
    height : 48px;
    border-radius : 2px;
`;
const RequestOTP = styled(Typography)`
     text-transform : none;
    background: #FB641B;
    color : #fff;
    height : 48px;
    border-radius : 2px;
    box-shadow  : 0 2px 4px 0 rgb( 0 0 0 20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color : #878787;

`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color : #2874f0;
    font-weight: 600;
    cursor : pointer;
`;
const accountInitialValues =  {
    login :{
        view :'login'
    },
    signup:{
        view:'signup'
    }
}

const signupIntitialvalues = {
    firstname: '',
    lastname:'',
    username :'',
    email :'',
    password :'',
    phoneNumber : ''
};

const loginininitialValues ={
    username : '',
    password : ''
};


const LoginDialog = ({ open, setOpen }) => {

    const [account , toggleAccount]= useState(accountInitialValues.login);
    const [signup , setSignup] = useState(signupIntitialvalues);

    const [login ,setLogin]=useState(loginininitialValues);

    const {setAccount} =useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]:e.target.value});
             
    }
    
    const signupUser = async () => {
        let response = await autheticateSignup(signup);
        if(!response);
        handleClose();
        setAccount(signup.firstname);
     }

  
    const onValueChange = (e) => {
        setLogin({...login ,[e.target.name] :e.target.value});
    }
    
    const loginUser = async () => {
        let response = await autheticateLogin(login);
    }

    
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">Login</Typography>
                        <Typography style={{ marginTop: 20 }}> Get an access to your orders  , wishlisst and recommendations</Typography>
                    </Image>
                    {   account.view ==='login' ?
                        <Wrapper>
                        <TextField variant="standard" onChange={ (e) => onValueChange(e)}  name='username' label="Enter Email/mobile Number"></TextField>
                        <TextField variant='standard' onChange={ (e) => onValueChange(e)}  name='password' label="Enter Password"></TextField>
                        <Text>By continuing to Flipkart's Terms of use and privacy policy</Text>
                        <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <CreateAccount onClick={()=> toggleSignup()}>New to filpart ? Create an account</CreateAccount>
                        <RequestOTP>Request OTP</RequestOTP>
                    </Wrapper>
                    :
                    <Wrapper>
                    <TextField variant="standard" onChange={ (e) => onInputChange(e)}  name='firstname' label="Enter FirstName"></TextField>
                    <TextField variant='standard' onChange={ (e) => onInputChange(e)}  name='lastname' label="Enter LastName"></TextField>
                    <TextField variant='standard' onChange={ (e) => onInputChange(e)}  name='username' label="Enter username"></TextField>
                    <TextField variant='standard'  onChange={ (e) => onInputChange(e)}  name='email' label="Enter Email"></TextField>
                    <TextField variant='standard' onChange={ (e) => onInputChange(e)}  name='password' label="Enter Password"></TextField>
                    <TextField variant='standard' onChange={ (e) => onInputChange(e)}   name='phoneNumber' label="Enter Phone"></TextField>
                    <LoginButton onClick={ ()=>signupUser()}>Continue</LoginButton>
                   
                </Wrapper>
                }   
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;

// {true ?
//     <Wrapper>
//         <TextField variant="standard" label="Enter Email/mobile Number"></TextField>
//         <TextField variant='standard' label="Enter Password"></TextField>
//         <Text>By continuing to Flipkart's Terms of use and privacy policy</Text>
//         <LoginButton>Login</LoginButton>
//         <Typography style={{ textAlign: 'center' }}>OR</Typography>
//         <RequestOTP>Request OTP</RequestOTP>
//         <CreateAccount>New to filpart ? Create an account</CreateAccount>
//     </Wrapper>
//     :
//     <Wrapper>
//         <TextField variant="standard" label="Enter Firstname"></TextField>
//         <TextField variant='standard' label="Enter lastame"></TextField>
//         <TextField variant='standard' label="Enter UserName"></TextField>
//         <TextField variant='standard' label="Enter Email"></TextField>
//         <TextField variant='standard' label="Enter Password"></TextField>
//         <TextField variant='standard' label="Enter Phone"></TextField>

//         <RequestOTP>Request OTP</RequestOTP>


// }