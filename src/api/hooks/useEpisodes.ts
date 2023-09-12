import {useQuery} from 'react-query';
import {getMultipleEpisodes} from '../endpoints/episodes';

export const useEpisodes = (episodes: number[]) => {
  return useQuery('episodes', () => getMultipleEpisodes(episodes));
};
