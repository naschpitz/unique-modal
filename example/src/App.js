import React from 'react';

import UniqueModal, {UniqueModalController} from '@naschpitz/unique-modal';

const App = () => {
  setTimeout(() => {
    UniqueModalController.open(<div>Modal successfully opened.</div>)
  }, 2000);

  return <UniqueModal/>
}

export default App
