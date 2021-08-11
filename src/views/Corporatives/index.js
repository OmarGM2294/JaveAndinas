import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Card from '../../components/Card';

import commonStyles from '../../styles/common';

const Corporatives = ({navigation}) => {
  const data = [
    {
      press: () => navigation.push('Detail', {name: 'Consultoria'}),
      image: {
        uri: 'https://picsum.photos/300/300',
      },
      text: 'Consultoria',
    },
    {
      press: () => navigation.push('Detail', {name: 'Capacitación'}),
      image: {
        uri: 'https://picsum.photos/200/300',
      },
      text: 'Capacitación',
    },
    {
      press: () => navigation.push('Detail', {name: 'Implementación'}),
      image: {
        uri: 'https://picsum.photos/200/300',
      },
      text: 'Implementación',
    },
    {
      press: () => navigation.push('Detail', {name: 'Protocolos'}),
      image: {
        uri: 'https://picsum.photos/200/300',
      },
      text: 'Protocolos',
    },
  ];
  const cards = data.map((card, index) => <Card card={card} key={index} />);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={commonStyles.container}>{cards}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Corporatives;
