import React from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux';
import MainNavigation from './routing/MainNavigation/MainNavigation';

enableScreens();

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
}
