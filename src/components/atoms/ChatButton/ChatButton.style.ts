import styled from 'styled-components';
import {Box} from "@mui/system";

const Wrapper = styled(Box)`
  background: orange;
  width: 4em;
  height: 4em;
  border-radius: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1.5em;
  right: 1.5em;
`

export {
    Wrapper
}