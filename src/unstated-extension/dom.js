import React from 'react';

import { Provider } from 'unstated';

export default () => ({
  context: class {
    enhanceElement(reactElement) {
      console.log('dom');
      return <Provider>{reactElement}</Provider>;
    }
  }
});
