import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import './index.css';

import {colors} from './styles/colors';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.gray,
    },
    success: {
      main: colors.royalBlue,
    },
    warning: {
      main: colors.mysticGrey,
    },
    text: {
      primary: colors.darkGrey,
    },
    background: {
      default: colors.whisperWhite,
    },
    grey: {
      400: colors.mysticGrey,
    },
  },
  typography: {
    fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '2.65rem',
      fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
    },
    h2: {
      fontSize: '1.5rem',
      color: colors.darkGrey,
      fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
    },
    subtitle1: {
      fontSize: '1rem',
      fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
      color: colors.mysticGrey,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
      color: colors.mysticGrey,
    },
    h3: {
      fontSize: 20,
      fontWeight: 800,
      fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
      color: colors.darkGrey,
    },
    h4: {
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: ['Helvetica', 'Verdana', 'sans-serif'].join(','),
      color: colors.darkGrey,
    },
  },
  spacing: 4,
});

theme = responsiveFontSizes(theme, {breakpoints: ['xs', 'sm']});

export default theme;
