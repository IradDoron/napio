import objectToAbcTune from './objectToAbcTune';
import { v4 } from 'uuid';

// import elements templates
import Para from '../components/BookComponents/Para/Para';
import ListItem from '../components/BookComponents/ListItem/ListItem';
import Tune from '../components/BookComponents/Tune/Tune';

function renderElement(element, value, index) {
  switch (element) {
    case 'chapterHeader': {
      return <h1 key={index}>{value}</h1>;
    }
    case 'lessonHeader': {
      return <h2 key={index}>{value}</h2>;
    }
    case 'uList': {
      return (
        <ul key={index}>
          {value.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return <li key={index}>{renderElement(elementKey, elementValue, index)}</li>;
          })}
        </ul>
      );
    }
    case 'oList': {
      return (
        <ol key={index}>
          {value.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return <li key={index}>{renderElement(elementKey, elementValue, index)}</li>;
          })}
        </ol>
      );
    }
    case 'para': {
      return <Para key={index}>{value}</Para>;
    }
    case 'listItem': {
      return (
        <Para isItem key={index}>
          {value}
        </Para>
      );
    }
    case 'tune': {
      return <Tune key={index} id={v4()} tune={objectToAbcTune(value)} />;
    }
    default: {
      return <p key={index}>not in switch-case function</p>;
    }
  }
}

export default renderElement;
