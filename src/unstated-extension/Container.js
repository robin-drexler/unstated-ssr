import { Container } from 'unstated';

export default class extends Container {
  getInitialState(defaultState) {
    const globalState = global.__UNSTATED__;
    if (!globalState || !globalState[this.constructor.name]) {
      return defaultState;
    }
    return globalState[this.constructor.name];
  }
}
