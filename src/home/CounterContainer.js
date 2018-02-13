import Container from '../unstated-extension/Container';

export default class CounterContainer extends Container {
  constructor() {
    super();
    this.state = this.getInitialState({ counter: 0 });
  }

  increment = () => {
    this.setState({ counter: ++this.state.counter });
  };
  decrement = () => {
    this.setState({ counter: --this.state.counter });
  };
}
