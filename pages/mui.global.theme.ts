import { createMuiTheme } from '@material-ui/core/styles';

const MuiGlobalTheme = createMuiTheme({
    typography: {
        body1: {
            textTransform: 'none',
            color: 'red'
        }
    }
});

export default MuiGlobalTheme;