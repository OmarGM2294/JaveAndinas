import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Card from '../../components/Card';

import commonStyles from '../../styles/common';
import serviceData from '../../data/services';

const Academics = ({navigation}) => {
  const data = serviceData(navigation).find((e) => e.id === 1).subservices;
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
