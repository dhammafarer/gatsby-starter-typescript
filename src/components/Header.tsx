import * as React from 'react'
import Button from '@material-ui/core/Button';

interface HeaderProps {
}

const Header: React.SFC<HeaderProps> = (props) => (
  <div>
    <Button color="primary" variant="contained">
      hi
    </Button>
  </div>
);

export default Header;

