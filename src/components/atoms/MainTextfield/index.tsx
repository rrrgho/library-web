import React, {ChangeEvent, FC} from 'react';
import { Props } from './MainTextfield.types'
import {
    Wrapper
} from './MainTextfield.style'
import {TextField} from "@mui/material";

const MainTextfield: FC<Props> = ({ label, onchange }) => {
    return (
        <Wrapper>
            <TextField sx={{width:'100%', border:'none !important'}} id="outlined-basic" label={label} variant="outlined" onChange={onchange} />
        </Wrapper>
    )
}
export default MainTextfield
