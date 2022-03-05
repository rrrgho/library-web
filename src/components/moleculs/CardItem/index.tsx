import React, {FC} from 'react';
import {Props} from './CardItem.types'
import {
    Wrapper
} from "./CardItem.style";
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const CardItem: FC<Props> = ({title, date, status, background}) => {
    return (
        <Wrapper background={background}>
            <Grid container>
                <Box component={Grid} item xs={12} p={1}>
                    <Typography variant="body1" sx={{fontWeight: 'bold', color: '#888'}}>{title ?? "Title Here"}</Typography>
                    <Typography variant="body2" sx={{color: '#999', marginTop: '-3px'}}>{date ?? "Date here"}</Typography>
                </Box>
                <Box component={Grid} item xs={12} p={1} mt={4} sx={{display: 'flex'}}>
                    {
                        status ?
                            <>
                                <CheckIcon sx={{fontWeight: 'bold', color: 'green'}}/>
                                <Typography variant="body1" sx={{color: '#888'}} ml={1}>
                                    Tersedia
                                </Typography>
                            </>
                            :
                            <>
                                <CloseIcon sx={{fontWeight: 'bold', color: 'red'}}/>
                                <Typography variant="body1" sx={{color: '#888'}} ml={1}>
                                    Tersedia
                                </Typography>
                            </>
                    }
                </Box>
            </Grid>
        </Wrapper>
    );
}
export default CardItem