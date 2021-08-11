import * as React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';

import Card from '../../components/Card';
import commonStyles from '../../styles/common';
import productData from '../../data/products';

const Products = ({navigation}) => {
  const cards = productData(navigation).map((card, index) => (
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

export default Products;
