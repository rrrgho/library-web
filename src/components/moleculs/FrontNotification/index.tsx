import React, { FC } from 'react';
import {
    Wrapper
} from './FrontNotification.style'
import {Button, Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CachedIcon from '@mui/icons-material/Cached';

const FrontNotification: FC = () => {
    return (
        <Wrapper>
            <Grid container justifyContent="space-between">
                <Box component={Grid} item xs={1}>
                    <NotificationsIcon sx={{color:"#fff"}} />
                </Box>
                <Box component={Grid} item xs={9}>
                    <Typography variant={"body1"} sx={{color:'#fff', fontSize:'0.8em', marginTop:'0.3em'}}>
                        Kamu memiliki 0 peminjaman expired
                    </Typography>
                </Box>
                <Box component={Grid} item xs={1}>
                    <CachedIcon sx={{color:"#fff"}} />
                </Box>
            </Grid>
        </Wrapper>
    )
}

export default FrontNotification

