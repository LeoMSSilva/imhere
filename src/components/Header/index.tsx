import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
  eventName: string;
  eventDate: string;
}

export const Header = ({ eventName, eventDate }: Props) => {
  return (
    <>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventDate}>{eventDate}</Text>
    </>
  );
};
