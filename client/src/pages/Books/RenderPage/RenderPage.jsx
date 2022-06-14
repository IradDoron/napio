import renderElement from '../../../helpers/renderElement';

import { useState } from 'react';

function RenderPage({ pageData }) {
  const [topicsAreExpanded, setTopicsAreExpanded] = useState([]);
  function handleCollepseAll() {
    console.log('handleCollepseAll');
  }

  function handleExpandAll() {
    console.log('handleExpandAll');
  }

  return (
    <>
      {/* <button onClick={handleCollepseAll}>Collapse All</button>
      <button onClick={handleExpandAll}>Expand All</button> */}

      {pageData?.map((element, index) => {
        const elementKey = Object.keys(element)[0];
        const elementValue = element[elementKey];
        return renderElement(elementKey, elementValue, index);
      })}
    </>
  );
}

export default RenderPage;
