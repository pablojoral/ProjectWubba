import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import shadowStyle from '../../../styles/commonStyles/shadowStyle';
import colorPalette from '../../../styles/colors';

interface CharacterImageProps {
  uri: string;
  name: string;
}

const CharacterImage: React.FC<CharacterImageProps> = ({uri, name}) => {
  return (
    <View style={[styles.headerInnerContainer, shadowStyle]}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri, cache: 'force-cache'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.nameTextStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerInnerContainer: {
    gap: 24,
  },
  imageContainer: {
    alignSelf: 'center',
    height: 192,
    width: 192,
    overflow: 'hidden',
    borderRadius: 96,
    borderWidth: 0.5,
    borderColor: colorPalette.accentYellow,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameTextStyle: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '800',
    color: colorPalette.primaryBlue,
    alignSelf: 'center',
  },
});

export default CharacterImage;
