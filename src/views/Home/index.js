import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Image, Linking, TouchableOpacity, Text} from 'react-native';

import {colors} from '../../styles/base';

import Card from '../../components/Card';

import commonStyles from '../../styles/common';
import viewStyles from './styles';

const HomeScreen = ({navigation}) => {
  const keys = Object.keys(colors);
  ['white', 'background', 'platinum'].forEach(color => keys.splice(keys.indexOf(color), 1));
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
  const openLink = (url) => {
    Linking.openURL(url)
      .then((data) => {
        console.log('Opened successfully ' + data);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error, intentalo de nuevo mas tarde');
      });
  }
  return (
    <View style={viewStyles.main}>
      <View style={viewStyles.logoContainer}>
        <View>
          <Image
            style={viewStyles.logo}
            source={require('../../assets/img/logo.png')}
          />
          <Text style={viewStyles.slogan}>Ciencia y Tecnologia Para America</Text>
        </View>
      </View>
      <View style={viewStyles.socialContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.javeandinas.com/')}>
          <IconC name="web" size={40} color={colors.facebook} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/javeandinastutorias')}>
          <Icon name="facebook" size={40} color={colors.facebook} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com/tutorias_javeandinas/')}>
          <Icon name="instagram" size={40} color={colors.instagram} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('whatsapp://send?phone=573017874295')}>
          <Icon name="whatsapp" size={40} color={colors.whatsapp} />
        </TouchableOpacity>
      </View>
      <View style={viewStyles.buttonContainer}>
        <View style={commonStyles.container}>{cards}</View>
      </View>
    </View>
  );
};

export default HomeScreen;
