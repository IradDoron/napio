import { NavLink } from 'react-router-dom';

const accStyles = ['בסיס', 'בלדה', 'רגטיים', 'ג׳אז', 'פופ', 'רוק', 'בוסה נובה', 'רגאיי'];

function AccMainNav() {
  return (
    <nav>
      {accStyles.map((style) => {
        return (
          <NavLink to={`${style}`} key={style}>
            {style}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default AccMainNav;
