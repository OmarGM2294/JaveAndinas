import {StyleSheet} from 'react-native';

import {padding, colors} from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: colors.indigo,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: padding.sm,
  },
  contact: {
    color: colors.indigo,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: padding.md,
  },
  description: {
    color: colors.indigo,
    marginBottom: 0,
    textAlign: 'justify',
  },
  textContainer: {
    backgroundColor: colors.white,
    marginBottom: padding.lg,
    padding: padding.md,
  },
  carousel: {
    backgroundColor: colors.background,
    paddingVertical: padding.lg,
  },
});

export default styles;
