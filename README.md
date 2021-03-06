# @naschpitz/unique-modal

> A wrapper to react-modal to make it unique through the whole application.

[![NPM](https://img.shields.io/npm/v/@naschpitz/unique-modal.svg)](https://www.npmjs.com/package/@naschpitz/unique-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @naschpitz/unique-modal
```

## Usage

This code will open a modal after 2 seconds and then close it after 8 seconds.
```jsx
import React from 'react';

import {UniqueModal, UniqueModalController} from '@naschpitz/unique-modal';

const App = () => {
    setTimeout(() => {
        UniqueModalController.open(<div>Modal successfully opened.</div>)
    }, 2000);

    setTimeout(() => {
        UniqueModalController.close();
    }, 10000);

    return <UniqueModal/>
}

export default App
```

## License

MIT © [naschpitz](https://github.com/naschpitz)
