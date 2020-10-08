import {styled} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const Link = styled(Button)(({theme}) => ({
  textTransform: 'none',
  '&:hover': {
    border: 'none',
    background: 'none',
  },
}));
