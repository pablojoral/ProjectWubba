import React from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import GridItem from './ListItems/GridItem';
import ListItem from './ListItems/ListItem';
import ListStyle from '../../../../types/listStyle';
import {Character} from '../../../../types/character';
import Spinner from '../../../common/Spinner/Spinner';

interface ListProps<T> {
  data: T[];
  isFetchingNextPage: boolean;
  isLoading: boolean;
  listStyle: ListStyle;
  onEndReached: () => void;
  onItemPress: (item: T) => void;
}

const InfiniteList: React.FC<ListProps<Character>> = ({
  data,
  isFetchingNextPage,
  isLoading,
  listStyle,
  onItemPress,
  onEndReached,
}) => {
  const isGrid: boolean = listStyle === 'grid';
  const columnWrapperStyle: StyleProp<ViewStyle> = isGrid
    ? styles.columnWrapperStyle
    : null;

  const renderItem = ({item, index}: {item: Character; index: number}) => {
    return isGrid ? (
      <GridItem character={item} onPress={() => onItemPress(item)} />
    ) : (
      <ListItem
        character={item}
        index={index}
        onPress={() => onItemPress(item)}
      />
    );
  };
  const keyStractor = (item: Character) => item && item.id.toString();

  return (
    <View style={styles.listContainer}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Spinner />
        </View>
      ) : (
        <FlatList
          key={listStyle}
          numColumns={isGrid ? 3 : 1}
          data={data}
          columnWrapperStyle={columnWrapperStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
          ListFooterComponentStyle={styles.listComponentStyle}
          ListFooterComponent={isFetchingNextPage ? <Spinner /> : null}
          keyExtractor={keyStractor}
          onEndReached={onEndReached}
          showsVerticalScrollIndicator={false}
          style={styles.listStyle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  columnWrapperStyle: {
    justifyContent: 'center',
    marginVertical: 12,
    gap: 24,
  },
  listComponentStyle: {
    paddingVertical: 24,
  },
  listStyle: {
    paddingHorizontal: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    zIndex: -1,
  },
});

export default InfiniteList;
