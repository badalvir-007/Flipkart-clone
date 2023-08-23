import { Typography, Box , Menu ,MenuItem } from "@mui/material"
import { useState } from "react";


const Profile = ({ account }) => {

    const [open, setOpen] = useState(false);

    const handleclick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);

    }

    return (
        <>
            <Box onClick={handleclick}>
                <Typography style={{ marginTop: 2 }}>
                    {account}
                </Typography>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={open}
                onClose={handleClose}
               
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
               
            </Menu>
        </>
    )
}

export default Profile;