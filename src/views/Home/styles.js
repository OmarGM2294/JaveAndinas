import {StyleSheet} from 'react-native';

import {padding, colors} from '../../styles/base';

const panelStyles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: padding.sm,
    margin: -10,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: colors.background,
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
  },
  logo: {
    height: 250,
    marginBottom: padding.md,
    resizeMode: 'contain',
    width: 250,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: padding.md,
  },
  logoText: {
    color: colors.white,
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default panelStyles;
