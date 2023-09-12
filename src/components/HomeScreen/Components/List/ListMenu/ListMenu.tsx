import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CHARACTER_STATUS,
  CharacterStatus,
  GENDERS,
  Gender,
} from '../../../../../types/character';
import ListStyle from '../../../../../types/listStyle';
import useFilters from './hooks/useFilters';
import createSelector from '../../../../common/Selector';
import SvgFilter from '../../../../../../assets/icons/Filter';
import SvgGrid from '../../../../../../assets/icons/Grid';
import SvgList from '../../../../../../assets/icons/List';
import CollapsibleView from '../../../../common/CollapsibleView/CollapsibleView';
import ListMenuFilters from './components/ListMenuFilters';
import shadowStyle from '../../../../../styles/commonStyles/shadowStyle';
import ListStyleButton from './components/ListStyleButton';
import FiltersButton from './components/FiltersButton';
import colorPalette from '../../../../../styles/colors';

interface ListMenuProps {
  nameQuery: string | undefined;
  genderQuery: Gender | undefined;
  statusQuery: CharacterStatus | undefined;
  listStyle: ListStyle;
  onChangeNameQuery: (name: string) => void;
  onChangeGenderQuery: (gender: Gender) => void;
  onChangeStatusQuery: (status: CharacterStatus) => void;
  toggleListStyle: () => void;
}

const ListMenu: React.FC<ListMenuProps> = ({
  nameQuery,
  genderQuery,
  statusQuery,
  listStyle,
  onChangeNameQuery,
  onChangeGenderQuery,
  onChangeStatusQuery,
  toggleListStyle,
}) => {
  const {
    name,
    gender,
    status,
    filtersExpanded,
    handleChangeName,
    handleChangeGender,
    handleChangeStatus,
    toggleFiltersExpanded,
  } = useFilters(
    nameQuery,
    genderQuery,
    statusQuery,
    onChangeNameQuery,
    onChangeGenderQuery,
    onChangeStatusQuery,
  );

  const isGrid = listStyle === 'grid';

  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, shadowStyle]}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="wubba lubba dub dub"
          onChangeText={handleChangeName}
        />
        <View style={styles.buttons}>
          <FiltersButton toggleFiltersExpanded={toggleFiltersExpanded} />
          <ListStyleButton
            listStyle={listStyle}
            toggleListStyle={toggleListStyle}
          />
        </View>
      </View>
      <ListMenuFilters
        isVisible={filtersExpanded}
        selectedGender={gender}
        selectedStatus={status}
        onPressGender={handleChangeGender}
        onPressStatus={handleChangeStatus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.backgroundLight,
    marginHorizontal: 16,
    paddingRight: 8,
    borderRadius: 8,
    borderWidth: 0.25,
    borderColor: colorPalette.accentYellow,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 36,
    flex: 0.9,
    borderBottomWidth: 0.25,
    borderBottomLeftRadius: 8,
    borderColor: colorPalette.accentYellow,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default ListMenu;
