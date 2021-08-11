import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Card from '../../components/Card';

import commonStyles from '../../styles/common';

const Academics = ({navigation}) => {
  const data = [
    {
      press: () => navigation.push('Detail', {name: 'Tutorias'}),
      image: {
        uri: 'https://picsum.photos/300/300',
      },
      text: 'Tutorias',
    },
    {
      press: () => navigation.push('Detail', {name: 'Realización de proyectos'}),
      image: {
        uri: 'https://picsum.photos/200/300',
      },
      text: 'Realización de proyectos',
    },
    {
      press: () => navigation.push('Detail', {name: 'Acompañamientos'}),
      image: {
        uri: 'https://picsum.photos/200/300',
      },
      text: 'Acompañamiento',
    },
    {
      press: () => 
        navigation.push('Detail', {
          name: 'Tesis, investigaciones, casos clinicos, etc',
        }),
      image: {
        uri: 'https://picsum.photos/200/300',
      },
      text: 'Tesis, investigaciones, casos clinicos, etc',
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

export default Academics;
