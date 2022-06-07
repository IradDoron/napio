import { useParams, Outlet } from 'react-router-dom';

function AccPageTemplate() {
  const params = useParams();
  const style = params.style;
  console.log(style);
  return (
    <>
      <h1>TEST</h1>;
      <Outlet />
    </>
  );
}

export default AccPageTemplate;
