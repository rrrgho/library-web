import styled from 'styled-components';
import {WrapperProps} from './SquareMenu.types'
import {Box} from "@mui/system";

const Wrapper = styled(Box)<WrapperProps>`
  width: 3.5em;
  height: 3.5em;
  background: ${props => props.backgroundColor};
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  border-radius: 7px;
`

export {
    Wrapper
}