import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import shadowStyle from '../../../styles/commonStyles/shadowStyle';

const Banner: React.FC = () => {
  return (
    <View style={[styles.container, shadowStyle]}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          source={require('../../../../assets/images/rick-and-morty-logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Banner;
