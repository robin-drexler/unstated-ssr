import React from 'react';

import { Provider } from 'unstated';

import CounterContainer from '../home/CounterContainer';

export default () => ({
  context: class {
    enhanceElement = async (reactElement) => {
      const count = await Promise.resolve(Math.floor(Math.random() * 100));
      const container = new CounterContainer();
      container.state.counter = count;
      this.inject = [container];

      return <Provider inject={this.inject}>{reactElement}</Provider>;
    };

    getTemplateData = async (templateData) => {
      const state = this.inject.reduce((state, container) => {
        state[container.constructor.name] = container.state;
        return state;
      }, {});
      return {
        ...templateData,
        globals: templateData.globals.concat({
          name: '__UNSTATED__',
          value: state
        })
      };
    };
  }
});
