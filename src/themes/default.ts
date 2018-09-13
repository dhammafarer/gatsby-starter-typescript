import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import purple from 'material-ui/colors/purple';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
    error: red,
  }
});
