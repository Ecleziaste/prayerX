import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </PersistGate>
    </Provider>
  );
};

export default App;
