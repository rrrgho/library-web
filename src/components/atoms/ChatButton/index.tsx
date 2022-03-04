import React, {FC} from 'react';
import {Wrapper} from './ChatButton.style'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

const ChatButton: FC = () => {
    return (
        <Wrapper>
            <MapsUgcIcon sx={{fontSize:'2em', color:'#fff'}} />
        </Wrapper>
    )
}

export  default ChatButton