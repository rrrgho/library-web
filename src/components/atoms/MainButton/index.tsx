import React, { FC } from 'react'
import { Props } from './MainButton.types'
import {
    Wrapper
} from './MainButton.style'
import {Button} from "@mui/material";

const MainButton: FC<Props> = ({ children, variant }) => {
    return (
        <Wrapper>
            <Button variant={variant} sx={{width:'100%', height:'100%', border:'none !important'}}>
                {children}
            </Button>
        </Wrapper>
    )
}
export default MainButton