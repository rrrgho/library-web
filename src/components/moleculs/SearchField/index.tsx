import React, { FC } from 'react';
import { Props } from './SearchField.types'
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import MainTextfield from "../../atoms/MainTextfield";
import MainButton from "../../atoms/MainButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchField: FC<Props> = ({ label }) => {
    return (
        <Grid container justifyContent="space-between">
            <Box component={Grid} item xs={10}>
                <MainTextfield label={label} onchange={() => {}} />
            </Box>
            <Box component={Grid} item xs={2}>
                <MainButton variant={"outlined"}>
                    <SearchOutlinedIcon sx={{color:"#fff", fontSize:'2.4em'}} />
                </MainButton>
            </Box>
        </Grid>
    )
}

export default SearchField