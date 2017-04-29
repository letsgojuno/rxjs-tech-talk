// Import React
import React from 'react';
import Rx, { Observable } from 'rxjs';
import * as Recompose from 'recompose';

import Counter from '-!babel-loader!raw-loader!../assets/counter.js';
import Autocomplete from '../assets/autocomplete.js';
import DragDrop from '../assets/drag-drop.js';
import Console from '-!babel-loader!raw-loader!../assets/console.js';
import Operators from '-!babel-loader!raw-loader!../assets/operators.js';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Image,
  Layout,
  Fill,
  Fit,
  List,
  Quote,
  Slide,
  Text,
  Code,
  ComponentPlayground,
  CodePane,
  Appear
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  investors: require('../assets/giphy.gif'),
  redux: require('../assets/redux.png'),
  reduxObservable: require('../assets/redux-observable.png'),
  typeTable: require('../assets/type-table.png'),
  charlie: require('../assets/charlie.jpg'),
  proposal: require('../assets/tc39-proposal.png'),
  allthethings: require('../assets/x-all-the-y.jpg')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Menlo',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            RxJS Baby Steps
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Javascript <Appear><span>❤</span></Appear></Heading>
          <List>
            <Appear>
              <ListItem>Async programming in JS is hard</ListItem>
            </Appear>
            <Appear><ListItem>Race conditions</ListItem></Appear>
            <Appear><ListItem>Callback hell</ListItem></Appear>
            <Appear><ListItem>Managing state</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          lang="js"
          code={require('!!babel-loader!raw-loader!../assets/callback-hell.js')}
          ranges={[{ loc: [0, 25], title: '😖' }, { loc: [0, 24] }]}
        />

        <Slide>
          <Heading size={2}>RxJS</Heading>
          <List>
            <Appear>
              <BlockQuote>
                <Quote style={{ color: 'black', fontSize: '1.25em' }}>
                  RxJS is a library for reactive programming using Observables
                </Quote>
                <Cite>reactivex.io</Cite>
              </BlockQuote>
            </Appear>
            <br /><br />
            <Appear>
              <Text textSize="0.75em" textAlign="center">
                "Think of RxJS as Lodash for events."
              </Text>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Reactive Programming</Heading>
          <List>
            <Appear>
              <BlockQuote>
                <Quote style={{ color: 'black', fontSize: '1.25em' }}>
                  ...reactive programming is an asynchronous programming paradigm oriented around data streams and the propagation of change.
                </Quote>
                <Cite>wikipedia</Cite>
              </BlockQuote>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Promises</Heading>
          <Appear>
            <List>
              <ListItem>Single values</ListItem>
              <ListItem>Immutable</ListItem>
              <ListItem>Non lazy</ListItem>
              <ListItem>Non cancellable</ListItem>
              <ListItem>Push based</ListItem>
              <ListItem>Guaranteed future (res/rej)</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Observables</Heading>
          <Appear>
            <List>
              <ListItem>Any number of values</ListItem>
              <ListItem>Values over time</ListItem>
              <ListItem>Lazy</ListItem>
              <ListItem>Cancellable</ListItem>
              <ListItem>Push based</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Heading size={4}>Promise</Heading>
              <List>
                <ListItem style={{ fontSize: '0.75em' }}>
                  Single values
                </ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>Immutable</ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>Non lazy</ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>
                  Non cancellable
                </ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>Push based</ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>
                  Guaranteed future (res/rej)
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={4}>Observable</Heading>
              <List>
                <ListItem style={{ fontSize: '0.75em' }}>
                  Any number of values
                </ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>
                  Values over time
                </ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>Lazy</ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>Cancellable</ListItem>
                <ListItem style={{ fontSize: '0.75em' }}>Push based</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <ComponentPlayground
            previewBackgroundColor="#f4f4f4"
            scope={{ Rx, Recompose }}
            code={Console}
            theme="light"
          />
        </Slide>

        <Slide>
          <Heading size={2}>Types</Heading>
          <br />
          <Layout>
            <Fill>
              <Appear><Image width="80%" src={images.typeTable} /></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <Image width="100%" src={images.proposal} />
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={2}>Operators</Heading>
          <br />
          <Text textSize="1em" textAlign="center">
            RxJS observables come with a vast amount of operators
          </Text>
          <List>
            <ListItem>map</ListItem>
            <ListItem>filter</ListItem>
            <ListItem>scan</ListItem>
            <ListItem>mergeMap</ListItem>
            <ListItem>switchMap</ListItem>
            <ListItem>combineLatest</ListItem>
            <ListItem>concat</ListItem>
            <ListItem>do</ListItem>
          </List>
        </Slide>

        <Slide>
          <ComponentPlayground
            previewBackgroundColor="#f4f4f4"
            scope={{ Rx, Recompose }}
            code={Operators}
            theme="light"
          />
        </Slide>

        <Slide maxHeight="100%" maxWidth="100%">
          <iframe
            style={{ width: '100%', height: 750 }}
            src="http://rxmarbles.com/"
            frameBorder="0"
          />
        </Slide>

        <Slide>
          <Heading size={4}>Who's using it?</Heading>
          <List>
            <Appear><ListItem>Netflix</ListItem></Appear>
            <Appear>
              <ListItem>Google - angular</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Rx all the things</Heading>
          <Appear><Image src={images.allthethings} /></Appear>
        </Slide>

        <Slide>
          <ComponentPlayground
            previewBackgroundColor="#f4f4f4"
            scope={{ Observable, Recompose }}
            code={Counter}
            theme="light"
          />
        </Slide>
        <Slide bgColor="primary">
          <Autocomplete />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('!!babel-loader!raw-loader!../assets/autocomplete.js')}
          ranges={[
            { loc: [0, 42], title: 'Autocomplete' },
            { loc: [25, 37] },
            { loc: [11, 23] },
            { loc: [17, 22] }
          ]}
        />

        <CodeSlide
          lang="js"
          code={require('!!babel-loader!raw-loader!../assets/retry.js')}
          ranges={[
            { loc: [0, 31], title: 'Retry' },
            { loc: [2, 9] },
            { loc: [10, 17] },
            { loc: [18, 30] }
          ]}
        />
        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <Image width="100%" src={images.investors} />
              <Text
                style={{
                  color: 'black',
                  position: 'absolute',
                  fontSize: '2em',
                  background: 'white',
                  fontSize: '1.5em',
                  top: '100%',
                  left: '100%',
                  textTransform: 'uppercase',
                  transform: 'translate(-100%, -120%) rotate(-15deg)',
                  padding: '0.5em'
                }}
              >
                Backoffice
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image width="75%" src={images.redux} />
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={2}>Redux</Heading>
          <List>
            <Appear><ListItem>Managed state via reducers</ListItem></Appear>
            <Appear>
              <ListItem>Dispatch actions for state updates</ListItem>
            </Appear>
            <Appear><ListItem>State updates are Synchronous</ListItem></Appear>
            <Appear>
              <ListItem>
                Async updates via middleware (thunk, redux-observable)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image width="75%" src={images.reduxObservable} />
            </Fill>
          </Layout>
        </Slide>

        <Slide maxHeight="100%" maxWidth="100%">
          <iframe
            style={{ width: '100%', height: 750 }}
            src="https://jsbin.com/vayoho/embed?js,output&height=500px"
            frameBorder="0"
          />
        </Slide>

        <Slide bgColor="primary" transition={["spin", "slide"]}>
          <Layout>
            <Fill>
              <Image width="60%" src={images.charlie} />
              <Text
                style={{
                  color: 'black',
                  position: 'absolute',
                  fontSize: '2em',
                  background: 'white',
                  fontSize: '1.5em',
                  top: '100%',
                  left: '100%',
                  textTransform: 'uppercase',
                  transform: 'translate(-160%, -100%) rotate(-15deg)',
                  padding: '0.5em'
                }}
              >
                Thank You
              </Text>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
