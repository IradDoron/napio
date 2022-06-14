import renderElement from '../../../helpers/renderElement';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';

function Topic({ value }) {
  const { title, topicElements, index } = value;
  const [expanded, setExpanded] = useState(true);
  function handleChange() {
    console.log('handleChange');
    setExpanded(!expanded);
  }

  return (
    <>
      <Accordion
        sx={{ width: '100%', maxWidth: '900px', margin: '12px 0', padding: '5px' }}
        expanded={expanded}
        onChange={handleChange}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ textAlign: 'center', width: '100%' }} variant="h4">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {topicElements.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return renderElement(elementKey, elementValue, index);
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Topic;
