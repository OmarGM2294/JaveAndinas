import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Card from '../../components/Card';
import serviceData from '../../data/services';
import commonStyles from '../../styles/common';

const Services = ({navigation}) => {
  const cards = serviceData(navigation).map((card, index) => (
    <Card card={card} key={index} />
  ));
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={commonStyles.container}>{cards}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;
