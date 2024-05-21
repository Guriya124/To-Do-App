import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../app/user/userSlice';


export default function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentuser = useSelector(state => state.user.currentUser)
    console.log(currentuser)
    function handlelogout() {
        dispatch(signout())
        navigate("/signup")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        To do lIst                    </Typography>
                    <Button color="inherit" onClick={handlelogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}