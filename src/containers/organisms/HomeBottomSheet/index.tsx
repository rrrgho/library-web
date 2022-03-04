import React, { FC } from 'react';
import {
    Wrapper
} from './HomeBottomSheet.style'
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import ChatButton from "../../../components/atoms/ChatButton";
import FrontNotification from "../../../components/moleculs/FrontNotification";
import MenuGrid from "../../../components/moleculs/MenuGrid";
import FavoriteIcon from '@mui/icons-material/Favorite';

const HomeBottomSheet: FC = () => {
    return (
        <Wrapper>
            <Grid container>
                <Box component={Grid} item xs={12}>
                    <ChatButton />
                </Box>
                <Box component={Grid} item p={3} xs={12}>
                    <Typography sx={{fontSize:'1.7em', fontWeight:'bold', color:'#666'}}>Rian</Typography>
                    <Typography sx={{fontSize:'1em', color:'#666'}}>Nomor Induk: rrrgho</Typography>
                </Box>
                <Box component={Grid} item p={3} xs={12}>
                    <FrontNotification />
                </Box>
                <Box component={Grid} item p={3} xs={12}>
                    <MenuGrid />
                </Box>
                <Box component={Grid} container p={3} xs={12} justifyContent={"center"}>
                    <Box component={Grid} item xs={3} sx={{textAlign:'center'}}>
                        <Typography sx={{fontSize:'0.8em', color:'#888'}}>Made with</Typography>
                    </Box>
                    <Box component={Grid} item xs={1}>
                        <FavoriteIcon sx={{color:'pink'}} />
                    </Box>
                    <Box component={Grid} item xs={3} sx={{textAlign:'center'}}>
                        <Typography sx={{fontSize:'0.8em', color:'#888'}}>By Mikroskil</Typography>
                    </Box>
                    {/*<Typography>Made with <FavoriteIcon sx={{marginTop:3}}/> By Mikroskil</Typography>*/}
                </Box>
            </Grid>
        </Wrapper>
    )
}

export default HomeBottomSheet