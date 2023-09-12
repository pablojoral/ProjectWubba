import {API_BASE_URL} from '../../../config';
import {RickAndMortyMultipeObjectAPIResponse} from '../../types/apiResponse';
import {Episode} from '../../types/episode';

export const getMultipleEpisodes = async (
  episodes: number[],
): Promise<RickAndMortyMultipeObjectAPIResponse<Episode> | void> => {
  try {
    // Initialize base URL
    let url = API_BASE_URL + '/episode/';

    // Convert params array to string and append to base URL
    url += episodes.join(',');

    console.log(url);

    const response = await fetch(url);
    const json: RickAndMortyMultipeObjectAPIResponse<Episode> =
      await response.json();
    console.log(json);

    return json;
  } catch (error) {
    console.error(error);
  }
};
