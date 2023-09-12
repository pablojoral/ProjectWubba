import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Character} from '../../../../../types/character';
import {checkEven} from '../../../../../utils/checkEven';
import colorPalette from '../../../../../styles/colors';

interface ListItemProps {
  character: Character;
  index: number;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({character, index, onPress}) => {
  const isEven = checkEven(index);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isEven ? styles.evenContainer : styles.notEvenContainer,
      ]}
      onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: character.image, cache: 'force-cache'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{character.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  notEvenContainer: {
    backgroundColor: colorPalette.backgroundLight,
  },
  evenContainer: {},
  imageContainer: {
    height: 50,
    width: 50,
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

export default ListItem;
