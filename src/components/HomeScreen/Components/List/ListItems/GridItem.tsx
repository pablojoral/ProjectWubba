import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Character} from '../../../../../types/character';
import colorPalette from '../../../../../styles/colors';

interface GridItemProps {
  character: Character;
  onPress: () => void;
}

const GridItem: React.FC<GridItemProps> = ({character, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: character.image, cache: 'force-cache'}}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 96,
    width: 96,
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    paddingVertical: 4,
  },
  text: {
    fontFamily: 'System',
    fontSize: 16,
    color: colorPalette.darkText,
    fontWeight: '600',
  },
});

export default GridItem;
