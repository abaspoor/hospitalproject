import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ShopIcon from '@mui/icons-material/Shop';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
export default function SwipeableTemporaryDrawer({link,lang}) {
    const history = useNavigate();
    const items = link;
    const faitems = [link[2],link[1],link[0]];
	const finalitems = (lang=='en') ? items : faitems;
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {

            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const icons = (index) => {
        if(index==0){return <ShopIcon/>}
        else if(index==1){return <CollectionsIcon/>}
        else{return <InfoIcon/>}
    }
    const handledrawer = (event,index) => {
        if(index==0){
            history('/signin/');
        }
        if(index==1){
            history('/services/');
        }
        if(index==2){
            history('/aboutus/');
        }
    }
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {finalitems.map((text, index) => (
                    <ListItem key={index}>
                        <ListItemButton key={index} onClick={(event)=>handledrawer(event,index)}>
                            <ListItemIcon >
                                {icons(index)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant={'outlined'} onClick={toggleDrawer(anchor, true)} sx={{margin:'20px 0px 0px 20px'}}><MenuIcon sx={{bgcolor:'transparent'}}></MenuIcon></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        PaperProps={{ style: { width: 180, overflowX: 'hidden' } }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}