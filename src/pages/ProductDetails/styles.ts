import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginVertical: 24
  },
  blockContent: {
    marginVertical: 4
  },
  blockContentPrice: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    fontSize: 32,
    marginBottom: 8
  },
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text
  },
  textDays: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 18
  },
  textPrice: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    fontSize: 22
  },
  buttonContainer: {
    marginVertical: 40,
    alignItems: 'center'
  }
});