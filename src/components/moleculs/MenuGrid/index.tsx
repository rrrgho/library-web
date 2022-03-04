import React, { FC } from 'react';
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import SquareMenu from "../../atoms/SquareMenu";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CampaignIcon from '@mui/icons-material/Campaign';
import EditIcon from '@mui/icons-material/Edit';
import THEME from "../../../theme";

const MenuGrid: FC = () => {
    return (
        <Grid container justifyContent="space-between">
            <Box component={Grid} item xs={3} sx={{justifyContent:'center',display:'flex'}}>
                <SquareMenu onclick={() => {alert("Button is clicked")}} backgroundColor={'#f7d257'}>
                    <FavoriteIcon sx={{color:'#fff', fontSize:'1.5em'}} />
                </SquareMenu>
            </Box>
            <Box component={Grid} item xs={3} sx={{justifyContent:'center',display:'flex'}}>
                <SquareMenu onclick={() => {alert("Button is clicked")}} backgroundColor={THEME.color.colorPrimary}>
                    <LocalFireDepartmentIcon sx={{color:'#fff', fontSize:'1.5em'}} />
                </SquareMenu>
            </Box>
            <Box component={Grid} item xs={3} sx={{justifyContent:'center',display:'flex'}}>
                <SquareMenu onclick={() => {alert("Button is clicked")}} backgroundColor={'#12afe3'}>
                    <CampaignIcon sx={{color:'#fff', fontSize:'1.5em'}} />
                </SquareMenu>
            </Box>
            <Box component={Grid} item xs={3} sx={{justifyContent:'center',display:'flex'}}>
                <SquareMenu onclick={() => {alert("Button is clicked")}} backgroundColor={'#f5844c'}>
                    <EditIcon sx={{color:'#fff', fontSize:'1.5em'}} />
                </SquareMenu>
            </Box>
        </Grid>
    )
}

export default MenuGrid