import React, { FC } from 'react';
import Image from 'next/image'
import {
    Wrapper
} from './HomeBanner.style'

const HomeBanner = () => {
    return (
        <Wrapper>
            <img src={'/assets/images/reading-flat.png'} style={{width:'100%', height:'100%'}} />
        </Wrapper>
    )
}
export default HomeBanner
