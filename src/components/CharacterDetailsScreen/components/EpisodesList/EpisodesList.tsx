import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Episode} from '../../../../types/episode';
import Spinner from '../../../common/Spinner/Spinner';
import EpisodesListItem from './components/EpisodesListItem';
import colorPalette from '../../../../styles/colors';

interface EpisodesListProps {
  episodes: Episode[];
  isLoading: boolean;
}

const EpisodesList: React.FC<EpisodesListProps> = ({episodes, isLoading}) => {
  return (
    <View>
      {isLoading ? (
        <Spinner />
      ) : (
        <View style={styles.episodesContainer}>
          <Text style={styles.titleTextStyle}>{'Episodes'}</Text>
          <View style={styles.episodesListContainer}>
            {Array.isArray(episodes) ? (
              episodes?.map(item => (
                <View key={item.episode}>
                  <EpisodesListItem episode={item} />
                </View>
              ))
            ) : episodes ? (
              <EpisodesListItem episode={episodes} />
            ) : null}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '800',
    color: colorPalette.primaryBlue,
    alignSelf: 'center',
  },
  episodesContainer: {
    gap: 24,
    paddingBottom: 24,
  },
  episodesListContainer: {
    gap: 8,
  },
});

export default EpisodesList;
