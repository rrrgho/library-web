import React, {FC} from 'react';

import {TabBox, Wrapper} from './BottomTabs.style'
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import THEME from "../../../theme";
import Router from 'next/router'



const BottomTabs: FC = () => {
    return (
        <Wrapper>
            <Grid container justifyContent="space-between">
                <Box component={Grid} item xs={2}>
                    <TabBox onClick={() => {alert("Tab is clicked")}}>
                        <HomeIcon sx={{fontSize:30, color:THEME.color.colorPrimary}} />
                        <Typography sx={{fontSize:12, color:'#888'}}>Beranda</Typography>
                    </TabBox>
                </Box>
                <Box component={Grid} item xs={2}>
                    <TabBox onClick={() => {alert("Tab is clicked")}}>
                        <MenuBookIcon sx={{fontSize:30, color:'#888'}} />
                        <Typography sx={{fontSize:12, color:'#888'}}>Ebook</Typography>
                    </TabBox>
                </Box>
                <Box component={Grid} item xs={2}>
                    <TabBox onClick={() => { Router.push('books') }}>
                        <LibraryBooksIcon sx={{fontSize:30, color:'#888'}} />
                        <Typography sx={{fontSize:12, color:'#888'}}>Buku</Typography>
                    </TabBox>
                </Box>
                <Box component={Grid} item xs={2}>
                    <TabBox onClick={() => {alert("Tab is clicked")}}>
                        <HistoryIcon sx={{fontSize:30, color:'#888'}} />
                        <Typography sx={{fontSize:12, color:'#888'}}>Riwayat</Typography>
                    </TabBox>
                </Box>
                <Box component={Grid} item xs={2}>
                    <TabBox onClick={() => {alert("Tab is clicked")}}>
                        <ManageAccountsIcon sx={{fontSize:30, color:'#888'}} />
                        <Typography sx={{fontSize:12, color:'#888'}}>Akun</Typography>
                    </TabBox>
                </Box>
            </Grid>
        </Wrapper>
    )
}

export default BottomTabs