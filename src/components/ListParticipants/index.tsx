import { Alert, FlatList } from 'react-native';

import { ListEmptyParticipants } from '~/components/ListEmptyParticipants';
import { ListHeaderParticipants } from '~/components/ListHeaderParticipants';
import { Participant } from '~/components/Participant';
import { IParticipants } from '~/screens/Home';

export const ListParticipants = ({
  participants,
  setParticipants,
}: IParticipants) => {
  const handleParticipantRemove = (participant: string) => {
    Alert.alert(
      'Remover',
      `Deseja realmente remover o participante ${participant}`,
      [
        {
          text: 'sim',
          onPress: () => {
            setParticipants(participants.filter((p) => p !== participant));
          },
        },
        {
          text: 'não',
        },
      ],
    );
  };

  const renderHeader = () => <ListHeaderParticipants />;
  const renderEmpty = () => <ListEmptyParticipants />;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmpty}
      data={participants}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Participant
          name={item}
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
    />
  );
};
