import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import colorPalette from '../../styles/colors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RoutesParams} from '../../routes/types';
import {Character} from '../../types/character';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderNavigator from '../common/HeaderNavigator';
import {useEpisodes} from '../../api/hooks/useEpisodes';
import shadowStyle from '../../styles/commonStyles/shadowStyle';
import {extractIDFromURL} from '../../utils/extractIdFromUrl';
import {Episode} from '../../types/episode';
import CharacterImage from './components/CharacterImage';
import CharacterInfoSection from './components/CharacterInfoSection';
import EpisodesList from './components/EpisodesList/EpisodesList';

const CharacterDetailsScreen: React.FC = () => {
  // Use react-native-safe-area-context to ensure padding that avoids screen notches
  const insets = useSafeAreaInsets();
  const topPadding: ViewStyle = {
    paddingTop: insets.top,
  };

  const route = useRoute<RouteProp<RoutesParams, 'CharacterDetailsScreen'>>();
  const character: Character = route.params.character;
  const episodeIDs = character.episode
    .map(url => extractIDFromURL(url))
    .filter((id): id is number => id !== null);
  const {data: episodes, isLoading, isFetching} = useEpisodes(episodeIDs);

  const episodesArray = useMemo(
    () =>
      Array.isArray(episodes)
        ? episodes.map((episode: Episode) => episode)
        : [],
    [episodes],
  );

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View style={[styles.headerConteiner, topPadding, shadowStyle]}>
        <HeaderNavigator />
        <CharacterImage name={character.name} uri={character.image} />
      </View>
      <View style={styles.contentContainer}>
        <CharacterInfoSection character={character} />
        <EpisodesList
          episodes={episodesArray}
          isLoading={isFetching || isLoading}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 24,
    backgroundColor: colorPalette.backgroundLighterLight,
  },
  headerConteiner: {
    backgroundColor: colorPalette.backgroundLight,
    paddingBottom: 16,
  },
  contentContainer: {
    gap: 24,
    marginHorizontal: 16,
  },
});

export default CharacterDetailsScreen;
