import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Montserrat',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  button: {
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#66615b'
  },
  primary: {
    backgroundColor: '#51cbce',
  },
  warning: {
    backgroundColor: '#fbc658',
  },
  danger: {
    backgroundColor: '#ef8157',
  },
  success: {
    backgroundColor: '#6bd098',
  },
  info: {
    backgroundColor: '#51bcda',
  },
});