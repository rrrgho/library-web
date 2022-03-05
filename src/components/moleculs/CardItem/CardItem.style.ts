import styled from 'styled-components';
import {Box} from "@mui/system";
import { PropsStyle } from "./CardItem.types";

const Wrapper = styled(Box)<PropsStyle>`
  width: 100%;
  min-height: 8em;
  background-color: ${props => props.background ?? '#fa98ae'};
  border-radius: 10px;
`

export {
    Wrapper
}