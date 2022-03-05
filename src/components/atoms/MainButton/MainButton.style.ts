import styled from 'styled-components';
import {Button} from "@mui/material";
import THEME from "../../../theme";
import {Box} from "@mui/system";

const Wrapper = styled(Box)`
  background-color: ${THEME.color.colorPrimary};
  min-height: 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export {
    Wrapper
}