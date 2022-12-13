import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
    width: '100%',
    height: 56,
    borderRadius: 4,
    backgroundColor: '#1f1e25',
  },
  name: {
    flex: 1,
    padding: 16,
    color: '#fdfcfe',
    fontWeight: '400',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    borderRadius: 4,
    backgroundColor: '#e23c44',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 24,
  },
});
