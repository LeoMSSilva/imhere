import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginTop: 28,
    marginBottom: 40,
    width: '100%',
    height: 56,
  },
  input: {
    flex: 1,
    padding: 16,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: '#1f1e25',
    color: '#fdfcfe',
    fontWeight: '400',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    borderRadius: 4,
    backgroundColor: '#31cf67',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 24,
  },
});
