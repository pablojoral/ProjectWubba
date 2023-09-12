import {useInfiniteQuery} from 'react-query';
import {getCharacters} from '../endpoints/characters';
import {useState} from 'react';
import {Character, CharacterStatus, Gender} from '../../types/character';

export const useCharacters = () => {
  const [nameQuery, setNameQuery] = useState<string | undefined>(undefined);
  const [genderQuery, setGenderQuery] = useState<Gender | undefined>(undefined);
  const [statusQuery, setStatusQuery] = useState<CharacterStatus | undefined>(
    undefined,
  );

  const data = useInfiniteQuery({
    queryKey: ['characters', nameQuery, genderQuery, statusQuery],
    queryFn: async ({pageParam = 1}) => {
      const res = await getCharacters(
        pageParam,
        nameQuery,
        genderQuery,
        statusQuery,
      );
      return res;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage && lastPage.info) {
        // Check if lastPage and lastPage.info are not null or undefined
        return allPages.length < lastPage.info.pages
          ? allPages.length + 1
          : undefined;
      }
      return undefined; // Return undefined if lastPage or lastPage.info is null or undefined
    },
  });

  // Using Array.prototype.map() to get only the "results" array from each page
  const resultsArray = data.data
    ? data.data.pages.map(page => (page ? page.results : []))
    : null;
  // Using Array.prototype.flat() to flatten the nested array
  const flatten: Character[] = resultsArray ? resultsArray?.flat() : [];

  return {
    ...data,
    flatten,
    nameQuery,
    genderQuery,
    statusQuery,
    setNameQuery,
    setGenderQuery,
    setStatusQuery,
  };
};
