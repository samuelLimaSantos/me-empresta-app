import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: theme.colors.inputBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: -10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 150/2
  }
});