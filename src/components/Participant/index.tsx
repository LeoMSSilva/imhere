import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  onRemove: () => void;
  name: string;
};

export const Participant = ({ onRemove, name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
