import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';

import {View, Text, Image} from 'react-native';

import {colors} from '../../styles/base';

import Card from '../../components/Card';

import commonStyles from '../../styles/common';
import viewStyles from './styles';

const HomeScreen = ({navigation}) => {
  const keys = Object.keys(colors);
  const data = [
    {
      press: () => navigation.push('Products'),
      icon: <Icon name="shopping-bag" size={70} color={colors.white} />,
      // eslint-disable-next-line no-bitwise
      color: colors[keys[(keys.length * Math.random()) << 0]],
      colorText: colors.white,
      text: 'Productos',
    },
    {
      press: () => navigation.push('Services'),
      icon: (
        <IconM name="miscellaneous-services" size={70} color={colors.white} />
      ),
      // eslint-disable-next-line no-bitwise
      color: colors[keys[(keys.length * Math.random()) << 0]],
      colorText: colors.white,
      text: 'Servicios',
    },
  ];
  const cards = data.map((card, index) => <Card card={card} key={index} />);
  return (
    <View style={viewStyles.main}>
      <View style={viewStyles.logoContainer}>
        <Image
          style={viewStyles.logo}
          source={require('../../assets/img/logo.png')}
        />
      </View>
      <View style={viewStyles.buttonContainer}>
        <View style={commonStyles.container}>{cards}</View>
      </View>
    </View>
  );
};

export default HomeScreen;
