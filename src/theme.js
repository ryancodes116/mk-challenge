import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#232338',
    },
    secondary: {
      main: '#5E9BC4',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
