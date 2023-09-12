import React from 'react';
import {StyleSheet, View} from 'react-native';
import TagDisplay from './TagDisplay';
import {Character} from '../../../types/character';

interface CharacterInfoSectionProps {
  character: Character;
}

const CharacterInfoSection: React.FC<CharacterInfoSectionProps> = ({
  character,
}) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoTextsContainer}>
        <View style={styles.tagGroup}>
          <TagDisplay text={character.species} label="species" />
          <TagDisplay text={character.gender} label="gender" />
        </View>
        <View style={styles.tagGroup}>
          <TagDisplay text={character.status} label="status" />
          <TagDisplay text={character.location.name} label="location" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    gap: 24,
    padding: 8,
  },
  infoTextsContainer: {
    width: '100%',
  },
  tagGroup: {
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CharacterInfoSection;
