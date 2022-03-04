import React, { FC } from 'react';
import { Props } from './SquareMenu.types'
import {
    Wrapper
} from './SquareMenu.style'
import {Button} from "@mui/material";

const SquareMenu: FC<Props> = ({ children, backgroundColor, onclick }) => {
    return(
        <Wrapper backgroundColor={backgroundColor}>
            <Button onClick={onclick} variant="text" sx={{width:'100%', height:'100%'}}>
                {children}
            </Button>
        </Wrapper>
    )
}
export default SquareMenu