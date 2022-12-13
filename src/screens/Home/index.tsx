import { useState } from 'react';
import { View } from 'react-native';

import { Form } from '~/components/Form';
import { Header } from '~/components/Header';
import { ListParticipants } from '~/components/ListParticipants';

import { styles } from './styles';

export interface IParticipants {
  participants: string[];
  setParticipants: (participants: string[]) => void;
}

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Header
        eventName="Nome do evento"
        eventDate="Sexta, 4 de Novembro de 2022."
      />
      <Form
        participants={participants}
        setParticipants={setParticipants}
      />
      <ListParticipants
        participants={participants}
        setParticipants={setParticipants}
      />
    </View>
  );
};
