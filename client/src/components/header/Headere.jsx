
import  {AppBar , Toolbar ,Box ,Typography , styled} from '@mui/material';
import React from 'react';

//component 
import Search from './Search';
import CustomButton from './CustomButton';

const StyledHeader = styled(AppBar)`
background :#2674f0;
`;

const Component = styled(Box)`
    margin-left : 12%;
`

const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style :italic;
`
const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:4,
})

const CustomButtonWrapper = styled(Box)`
    margin: 0  5% 0  auto;
`;

const Headere = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
   
  
        <StyledHeader>
            <Toolbar style={{minHeight:'55px'}}>
                <Component >
                    <img src={logoURL} alt='logo' style= {{ width :75 }} />
                    <Box style={{ display :'flex'}}>
                        <SubHeading>
                            Explore&nbsp;

                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='sublogo' />
                    </Box>

                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>  
    
  )
}

export default Headere;
