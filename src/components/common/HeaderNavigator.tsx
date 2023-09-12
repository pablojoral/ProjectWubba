import React, {useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import colorPalette from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import shadowStyle from '../../styles/commonStyles/shadowStyle';

const HeaderNavigator = () => {
  const navigation = useNavigation();

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={[styles.container, shadowStyle]}>
      <TouchableOpacity onPress={handlePressBack}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/portal-gun.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  imageContainer: {
    height: 48,
    width: 48,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default HeaderNavigator;
