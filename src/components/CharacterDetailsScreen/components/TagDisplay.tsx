import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colorPalette from '../../../styles/colors';

interface TagDisplayProps {
  text: string;
  label: string;
}

const TagDisplay: React.FC<TagDisplayProps> = ({text, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.dividingLine} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: colorPalette.darkText,
    fontWeight: '500',
  },
  label: {
    alignSelf: 'flex-end',
    color: colorPalette.darkText,
    opacity: 0.5,
    fontWeight: '600',
  },
  dividingLine: {
    borderBottomWidth: 0.5,
    borderBlockColor: colorPalette.darkText,
  },
});

export default TagDisplay;
