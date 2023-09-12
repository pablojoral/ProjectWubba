import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colorPalette from '../../styles/colors';

interface SelectorProps<T> {
  title: string;
  items: T[];
  selectedItem: T | undefined;
  handlePressItem: (item: T) => void;
}
function createSelector<T>(): React.FC<SelectorProps<T>> {
  return ({title, items, selectedItem, handlePressItem}) => {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text>{title}</Text>
          {items.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.itemContainer,
                selectedItem === item ? styles.selectedItemContainer : null,
              ]}
              onPress={() => handlePressItem(item)}>
              <Text style={styles.itemText}>{item.toString()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 16,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 0.25,
    borderRadius: 16,
    borderColor: colorPalette.darkText,
    backgroundColor: colorPalette.backgroundLight,
  },
  selectedItemContainer: {
    backgroundColor: colorPalette.accentYellow,
  },
  itemText: {},
});

export default createSelector;
