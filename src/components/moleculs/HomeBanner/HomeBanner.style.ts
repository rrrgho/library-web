import styled from 'styled-components';
import {Box} from "@mui/system";
import THEME from "../../../theme";

const Wrapper = styled(Box)`
  width: 100%;
  height:45vh;
  overflow: hidden;
  text-align: center;
  background: ${THEME.color.colorPrimary};
`

export {
    Wrapper
}