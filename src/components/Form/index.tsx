import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { IParticipants } from '~/screens/Home';

import { styles } from './styles';

export const Form = ({ participants, setParticipants }: IParticipants) => {
  const [newParticipant, setNewParticipant] = useState('');

  const handleParticipantAdd = () => {
    const participantName = newParticipant.trim();

    if (!participantName.length) {
      return Alert.alert(
        'Participante vazio',
        'O campo participante não pode ser vazio',
      );
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existente',
        `${participantName} já existe na lista`,
      );
    }
    setParticipants([...participants, participantName]);
    setNewParticipant('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        keyboardAppearance="dark"
        value={newParticipant}
        onChangeText={setNewParticipant}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
