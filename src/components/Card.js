import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import commonStyles from '../styles/common';

const Card = ({card, ...other}) => (
  <TouchableOpacity
    onPress={card.press}
    style={{...commonStyles.card, backgroundColor: card.color}}>
    {card.icon ? (
      <View style={commonStyles.cardIconContainer}>{card.icon}</View>
    ) : null}
    {card.image ? (
      <Image style={commonStyles.cardImage} source={card.image} />
    ) : null}
    <Text style={{...commonStyles.textCenter, color: card.colorText}}>
      {card.text}
    </Text>
  </TouchableOpacity>
);

export default Card;
