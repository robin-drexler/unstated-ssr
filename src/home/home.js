import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.css';

import { Subscribe } from 'unstated';
import CounterContainer from './CounterContainer';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Hops Demo</title>
      </Helmet>
      <h1 className={styles.headline}>Hello World!</h1>
      <div>
        <Subscribe to={[CounterContainer]}>
          {(counter) => {
            return (
              <div>
                <button onClick={counter.decrement}>-</button>
                {counter.state.counter}
                <button onClick={counter.increment}>+</button>
              </div>
            );
          }}
        </Subscribe>
      </div>
    </div>
  );
}
