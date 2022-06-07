import books_data from '../../../helpers/books_data/books_data';

// imports of material ui

function CategoryBlock({ categoryUrl }) {
  return (
    <>
      <h1>{books_data[categoryUrl].name}</h1>
    </>
  );
}

export default CategoryBlock;
