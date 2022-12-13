import { StatusBar } from 'react-native';

import { Home } from '~/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
