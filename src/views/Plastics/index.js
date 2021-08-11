import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Card from '../../components/Card';

import commonStyles from '../../styles/common';
import productData from '../../data/products';

const Plastics = ({navigation}) => {
  const data = productData(navigation).find((e) => e.id === 3).subproducts;
  const cards = data.map((card, index) => <Card card={card} key={index} />);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={commonStyles.container}>{cards}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Plastics;
