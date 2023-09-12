import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import shadowStyle from '../../../styles/commonStyles/shadowStyle';
import useSpin from './hooks/useSpin';

const Spinner: React.FC = () => {
  const {spin} = useSpin();
  return (
    <View style={[styles.container, shadowStyle]}>
      <View style={styles.imageContainer}>
        <Animated.Image
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            transform: [{rotate: spin}],
          }}
          source={require('../../../../assets/images/rick-face.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Spinner;
