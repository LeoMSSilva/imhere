import { Text } from 'react-native';

import { styles } from './styles';

export const ListEmptyParticipants = () => {
  return (
    <Text style={styles.listEmpty}>
      Ninguém chegou no evento ainda?{'\n'}
      Adicione participantes a sua lista de presença.
    </Text>
  );
};
