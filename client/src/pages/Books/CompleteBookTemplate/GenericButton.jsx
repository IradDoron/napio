// imports from material ui
import { Button } from '@mui/material';

// imports from react router dom
import { NavLink } from 'react-router-dom';

function GenericButton({ content, url }) {
  return (
    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={url}>
      <Button>{content}</Button>
    </NavLink>
  );
}

export default GenericButton;
