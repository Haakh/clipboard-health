import {styled} from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';

export const Button = styled(MaterialButton)(({theme}) => ({
  color: 'white',
  padding: theme.spacing(4, 12),
  borderRadius: theme.spacing(1),
  // background: theme.palette.primary.main,
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    // background: theme.palette.primary.main,
  },
}));
