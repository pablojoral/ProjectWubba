import {API_BASE_URL} from '../../../config';
import {RickAndMortyPaginatedAPIResponse} from '../../types/apiResponse';
import {Character, CharacterStatus, Gender} from '../../types/character';

export const getCharacters = async (
  page?: number,
  name?: string,
  gender?: Gender,
  status?: CharacterStatus,
): Promise<RickAndMortyPaginatedAPIResponse<Character> | void> => {
  try {
    // Initialize base URL
    let url = API_BASE_URL + '/character/?';

    // Initialize params array to store key-value pairs
    const params = [];

    // Add parameters to params array if they have a value
    if (page != null) {
      params.push(`page=${page}`);
    }
    if (name) {
      params.push(`name=${name}`);
    }
    if (gender) {
      params.push(`gender=${gender}`);
    }
    if (status) {
      params.push(`status=${status}`);
    }

    // Convert params array to string and append to base URL
    url += params.join('&');

    const response = await fetch(url);
    const json: RickAndMortyPaginatedAPIResponse<Character> =
      await response.json();
    if (json.error) {
      throw new Error(json.error);
    }
    return json;
  } catch (error) {
    console.error(error);
  }
};
