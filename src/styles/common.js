import {StyleSheet} from 'react-native';

import {padding} from './base';

const common = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: padding.sm,
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginVertical: padding.sm,
    height: 200,
    padding: padding.sm,
    textAlign: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    borderRadius: 10,
    height: '85%',
    width: '100%',
  },
  wa: {
    alignSelf: 'center',
    height: 70,
    marginTop: padding.md,
    width: 70,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textCenter: {
    fontWeight: '700',
    textAlign: 'center',
  },
  cardIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
});

export default common;
