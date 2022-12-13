import { View } from 'react-native';

import { Header } from '~/components/Header';

import { styles } from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        eventName="Nome do evento"
        eventDate="Sexta, 4 de Novembro de 2022."
      />
    </View>
  );
};
