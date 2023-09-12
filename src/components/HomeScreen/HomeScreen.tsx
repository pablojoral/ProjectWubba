import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useCharacters} from '../../api/hooks/useCharacters';
import {Character} from '../../types/character';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useListStyle from './hooks/useListStyle';
import shadowStyle from '../../styles/commonStyles/shadowStyle';
import colorPalette from '../../styles/colors';
import Banner from './Components/Banner';
import ListMenu from './Components/List/ListMenu/ListMenu';
import InfiniteList from './Components/List/InfiniteList';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RoutesParams} from '../../routes/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RoutesParams>>();

  const {
    fetchNextPage,
    setNameQuery,
    setGenderQuery,
    setStatusQuery,
    isFetchingNextPage,
    isLoading,
    flatten,
    nameQuery,
    genderQuery,
    statusQuery,
  } = useCharacters();

  // Use react-native-safe-area-context to ensure padding that avoids screen notches
  const insets = useSafeAreaInsets();
  const headContainerPadding: ViewStyle = {
    paddingTop: insets.top,
  };

  // Toggles between list and grid list style
  const {listStyle, toggleListStyle} = useListStyle();

  const handleItemPress = (character: Character) =>
    navigation.navigate('CharacterDetailsScreen', {character});

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={[styles.headContainer, headContainerPadding, shadowStyle]}>
          <Banner />
          <ListMenu
            nameQuery={nameQuery}
            genderQuery={genderQuery}
            statusQuery={statusQuery}
            listStyle={listStyle}
            onChangeNameQuery={setNameQuery}
            onChangeGenderQuery={setGenderQuery}
            onChangeStatusQuery={setStatusQuery}
            toggleListStyle={toggleListStyle}
          />
        </View>
        <InfiniteList
          data={flatten}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          listStyle={listStyle}
          onEndReached={() => fetchNextPage()}
          onItemPress={handleItemPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundLighterLight,
  },
  contentContainer: {
    flex: 1,
  },
  headContainer: {
    backgroundColor: colorPalette.backgroundLight,
    gap: 24,
    paddingVertical: 16,
  },
});

export default HomeScreen;
