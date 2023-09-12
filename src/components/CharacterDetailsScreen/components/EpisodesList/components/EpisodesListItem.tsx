import {StyleSheet, Text} from 'react-native';
import {Episode} from '../../../../../types/episode';
import {parseEpisodeString} from '../../../../../utils/parseEpisode';
import colorPalette from '../../../../../styles/colors';

interface EpisodesListItemProps {
  episode: Episode;
}
const EpisodesListItem: React.FC<EpisodesListItemProps> = ({episode}) => {
  const {season: seasonNumber, episode: episodeNumber} = parseEpisodeString(
    episode.episode,
  );
  return (
    <Text
      style={
        styles.episodeText
      }>{`S${seasonNumber} E${episodeNumber} - ${episode.name}`}</Text>
  );
};

const styles = StyleSheet.create({
  episodeText: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '600',
    color: colorPalette.darkText,
  },
});
export default EpisodesListItem;
