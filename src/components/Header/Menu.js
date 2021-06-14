import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import {AccountBalanceWallet, Help, Home, Reddit} from "@material-ui/icons";
import {Link} from "react-router-dom";


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton edge="start" className="menu-icon" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to={`/`}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <Home fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </StyledMenuItem>
                </Link>
                <Link to={`/reddit`}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <Reddit fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Reddit"/>
                    </StyledMenuItem>
                </Link>
                <Link to={`/portfolio`}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <AccountBalanceWallet fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Portfolio"/>
                    </StyledMenuItem>
                </Link>
                <a href="/indicators.pdf" target="_blank">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <Help fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Indicators"/>
                    </StyledMenuItem>
                </a>
            </StyledMenu>
        </div>
    );
}