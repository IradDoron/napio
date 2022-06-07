import renderElement from '../../../helpers/renderElement';

function RenderPage({ pageData }) {
  return (
    <>
      {pageData?.map((element, index) => {
        const elementKey = Object.keys(element)[0];
        const elementValue = element[elementKey];
        return renderElement(elementKey, elementValue, index);
      })}
    </>
  );
}

export default RenderPage;
