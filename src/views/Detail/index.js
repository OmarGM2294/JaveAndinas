import * as React from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import commonStyles from '../../styles/common';
import productData from '../../data/products';
import serviceData from '../../data/services';

import {colors} from '../../styles/base';

const Detail = ({route, navigation}) => {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const isCarousel = React.useRef(null);

  const [item, setItem] = React.useState({
    text: '',
    description: '',
    images: [],
  });

  const sendMessage = () => {
    let url =
      'whatsapp://send?text=¡Hola!, Me gustaria averiguar sobre: ' +
      item.text +
      ' ,porfavor&phone=573017874295';
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened successfully ' + data);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Make sure WhatsApp installed on your device');
      });
  };

  React.useEffect(() => {
    let data = null;
    if (route.params.type === 'product') {
      data = productData(navigation);
      setItem(data.find((e) => e.id === route.params.id));
    }
    if (route.params.type === 'subproduct') {
      data = productData(navigation);
      const products = data.find((e) => e.id === route.params.id);
      setItem(products.subproducts.find((e) => e.id === route.params.sub));
    }
    if (route.params.type === 'subservice') {
      data = serviceData(navigation);
      const service = data.find((e) => e.id === route.params.id);
      setItem(service.subservices.find((e) => e.id === route.params.sub));
    }
    navigation.setOptions({
      title: item.text,
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTintColor: colors.indigo,
    });
  }, [
    route.params.type,
    route.params.id,
    navigation,
    item.text,
    route.params.sub,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.carousel}>
          <Carousel
            layout="default"
            ref={isCarousel}
            data={item.images}
            // eslint-disable-next-line no-shadow
            renderItem={({item, index}) => {
              if (item.type === 'image') {
                return (
                  <Image key={index} style={styles.image} source={item.data} />
                );
              }
            }}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            loop={true}
            autoplay={true}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Descripción:</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.contact}>Contactanos para averiguar más:</Text>
          <TouchableOpacity onPress={sendMessage}>
            <Image
              style={commonStyles.wa}
              source={require('../../assets/img/whatsapp-logo.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
