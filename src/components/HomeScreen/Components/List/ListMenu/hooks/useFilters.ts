import {useCallback, useState} from 'react';
import {useFilter} from './useFilter';
import {CharacterStatus, Gender} from '../../../../../../types/character';

const useFilters = (
  nameQuery: string | undefined,
  genderQuery: Gender | undefined,
  statusQuery: CharacterStatus | undefined,
  onChangeNameQuery: (nameQuery: string) => void,
  onChangeGenderQuery: (genderQuery: Gender) => void,
  onChangeStatusQuery: (statusQuery: CharacterStatus) => void,
) => {
  const [filtersExpanded, setFiltersExpanded] = useState<boolean>(false);
  const toggleFiltersExpanded = useCallback(() => {
    setFiltersExpanded(!filtersExpanded);
  }, [filtersExpanded, setFiltersExpanded]);

  const {debouncedQuery: name, handleChange: handleChangeName} =
    useFilter<string>(nameQuery, onChangeNameQuery, 1000);

  const {debouncedQuery: gender, handleChange: handleChangeGender} =
    useFilter<Gender>(genderQuery, onChangeGenderQuery, 1000);

  const {debouncedQuery: status, handleChange: handleChangeStatus} =
    useFilter<CharacterStatus>(statusQuery, onChangeStatusQuery, 1000);

  return {
    name,
    gender,
    status,
    filtersExpanded,
    handleChangeGender,
    handleChangeName,
    handleChangeStatus,
    toggleFiltersExpanded,
  };
};

export default useFilters;
