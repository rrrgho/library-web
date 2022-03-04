import styled from 'styled-components';
import {Box} from "@mui/system";
import Props from './BottomTabs.types'

const Wrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: #fff;
  width: 100%;
  height: 7vh;
  border-top: solid 1px #ccc;
`

const TabBox = styled(Box)<Props>`
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  //display: flex;
  margin-top: 4px;
`

export {
    Wrapper,
    TabBox
}