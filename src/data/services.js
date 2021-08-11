import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconP from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../styles/base';

const serviceData = (navigation) => [
  {
    id: 1,
    press: () => navigation.push('Academics'),
    icon: <IconE name="book" size={70} color={colors.white} />,
    color: colors.cinnabar,
    colorText: colors.white,
    text: 'Academicos',
  },
  {
    id: 2,
    press: () => navigation.push('Corporatives'),
    icon: <Icon name="business" size={70} color={colors.white} />,
    color: colors.nobel,
    colorText: colors.white,
    text: 'Corporativos',
  },
  {
    id: 3,
    press: () => navigation.push('Health'),
    icon: <IconF name="heartbeat" size={70} color={colors.white} />,
    color: colors.sanitizer,
    colorText: colors.white,
    text: 'Salud',
    subservices: [
      {
        id: 1,
        press: () =>
          navigation.push('Detail', {id: 3, type: 'subservice', sub: 1}),
        icon: <IconF name="stethoscope" size={70} color={colors.white} />,
        text: 'Visita medica',
        color: colors.fruit_salad,
        colorText: colors.white,
        description: '',
        images: [],
      },
      {
        id: 2,
        press: () => navigation.push('Diagnostic'),
        icon: <IconP name="monitor" size={70} color={colors.white} />,
        text: 'Diagnostico on-line',
        color: colors.orange_peel,
        colorText: colors.white,
        description: '',
        images: [],
      },
    ],
  },
];

export default serviceData;
