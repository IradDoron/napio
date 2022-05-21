import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

// import material components

import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Paper } from '@mui/material';

// import icons
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function PagesNav() {
  const [value, setValue] = useState(0);

  return (
    <nav>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Lessons" icon={<ThumbUpAltIcon />} component={Link} to="/lessons" />
          <BottomNavigationAction label="Theory" icon={<ThumbUpAltIcon />} component={Link} to="/theory" />
          <BottomNavigationAction label="Harmony" icon={<ThumbUpAltIcon />} component={Link} to="/harmony" />
          <BottomNavigationAction label="Books" icon={<ThumbUpAltIcon />} component={Link} to="/books" />
          <BottomNavigationAction label="Technique" icon={<ThumbUpAltIcon />} component={Link} to="/technique" />
          <BottomNavigationAction label="Composition" icon={<ThumbUpAltIcon />} component={Link} to="/composition" />
        </BottomNavigation>
      </Paper>
    </nav>
  );
}

export default PagesNav;
