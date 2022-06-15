import objectToAbcTune from './objectToAbcTune';
import { v4 } from 'uuid';

import styled from 'styled-components';

// import elements templates
import Para from '../components/BookComponents/Para/Para';
import ListItem from '../components/BookComponents/ListItem/ListItem';
import Tune from '../components/BookComponents/Tune/Tune';
import TopicHeader from '../components/BookComponents/TopicHeader/TopicHeader';
import VideosMat from '../components/BookComponents/VideosMat/VideosMat';
import Topic from '../components/BookComponents/Topic/Topic';
import ComingSoon from '../components/BookComponents/ComingSoon/ComingSoon';

const listItemFlex = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

function renderElement(element, value, index, topicsAreExpanded) {
  switch (element) {
    case 'chapterHeader': {
      return <h1 key={index}>{value}</h1>;
    }
    case 'lessonHeader': {
      return <h2 key={index}>{value}</h2>;
    }
    case 'uList': {
      return (
        <ul key={index} style={{ margin: 0, padding: 0 }}>
          {value.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return (
              <li key={index} style={{ padding: 0, margin: 0 }}>
                {renderElement(elementKey, elementValue, index)}
              </li>
            );
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
    case 'topicHeader': {
      return <TopicHeader key={index}>{value}</TopicHeader>;
    }
    case 'videosMat': {
      return <VideosMat key={index} value={value} />;
    }
    case 'topic': {
      return <Topic key={index} value={value} index={index} topicsAreExpanded={topicsAreExpanded} />;
    }
    case 'comingSoon': {
      return <ComingSoon key={index} />;
    }
    default: {
      return <p key={index}>not in switch-case function</p>;
    }
  }
}

export default renderElement;
