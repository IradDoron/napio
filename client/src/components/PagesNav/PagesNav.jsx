import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

// import material components

import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Paper } from '@mui/material';

// import icons
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const StyledLabel = styled.p`
  font-size: 1.2rem;
`;

function PagesNav() {
  const [value, setValue] = useState(0);

  return (
    <nav>
      <Paper>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label={<StyledLabel>עמוד הבית</StyledLabel>} component={Link} to="/" />
          <BottomNavigationAction label={<StyledLabel>ליווי</StyledLabel>} component={Link} to="/accompaniment" />
          <BottomNavigationAction label={<StyledLabel>תאוריה</StyledLabel>} component={Link} to="/theory" />
          <BottomNavigationAction label={<StyledLabel>ספרים</StyledLabel>} component={Link} to="/books" />
          <BottomNavigationAction label={<StyledLabel>הרמוניה</StyledLabel>} component={Link} to="/harmony" />
          <BottomNavigationAction label={<StyledLabel>טכניקה</StyledLabel>} component={Link} to="/technique" />
          <BottomNavigationAction label={<StyledLabel>הלחנה</StyledLabel>} component={Link} to="/composition" />
          <BottomNavigationAction label={<StyledLabel>אלתור</StyledLabel>} component={Link} to="/improvisation" />
          <BottomNavigationAction label={<StyledLabel>משחקים</StyledLabel>} component={Link} to="/games" />
        </BottomNavigation>
      </Paper>
    </nav>
  );
}

export default PagesNav;
