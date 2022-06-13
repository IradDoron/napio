import { Typography } from '@mui/material';

function TopicHeader({ children }) {
  return (
    <Typography variant="h4" sx={{ marginTop: 4 }}>
      {children}
    </Typography>
  );
}

export default TopicHeader;
