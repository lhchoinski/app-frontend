import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Divider from "@mui/material/Divider";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon /> },
    { divider: true },
    { text: 'Users', icon: <PeopleRoundedIcon /> },
];

const secondaryListItems = [
    { text: 'About', icon: <InfoRoundedIcon /> },
];

export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    item.divider ? (
                        <Divider key={`divider-${index}`} sx={{ my: 1 }} />
                    ) : (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton selected={index === 0}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    )
                ))}
            </List>

            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}