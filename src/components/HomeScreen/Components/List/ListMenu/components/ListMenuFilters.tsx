import React from 'react';
import CollapsibleView from '../../../../../common/CollapsibleView/CollapsibleView';
import {StyleSheet, View} from 'react-native';
import createSelector from '../../../../../common/Selector';
import {
  CHARACTER_STATUS,
  CharacterStatus,
  GENDERS,
  Gender,
} from '../../../../../../types/character';

interface ListMenuFiltersProps {
  isVisible: boolean;
  selectedGender: Gender | undefined;
  selectedStatus: CharacterStatus | undefined;
  onPressGender: (gender: Gender) => void;
  onPressStatus: (status: CharacterStatus) => void;
}

const ListMenuFilters: React.FC<ListMenuFiltersProps> = ({
  isVisible,
  selectedGender,
  selectedStatus,
  onPressGender,
  onPressStatus,
}) => {
  // Create toggle selectors
  const GenderSelector = createSelector<Gender>();
  const CharacterStatusSelector = createSelector<CharacterStatus>();

  return (
    <CollapsibleView expanded={isVisible} size={180}>
      <View style={styles.contentContainer}>
        <GenderSelector
          title={'Gender'}
          items={[...GENDERS]}
          selectedItem={selectedGender}
          handlePressItem={onPressGender}
        />
        <CharacterStatusSelector
          title={'Status'}
          items={[...CHARACTER_STATUS]}
          selectedItem={selectedStatus}
          handlePressItem={onPressStatus}
        />
      </View>
    </CollapsibleView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 16,
  },
});

export default ListMenuFilters;
