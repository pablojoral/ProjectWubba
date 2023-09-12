import React from 'react';
import {TouchableOpacity} from 'react-native';
import SvgFilter from '../../../../../../../assets/icons/Filter';
import colorPalette from '../../../../../../styles/colors';

interface FiltersButtonProps {
  toggleFiltersExpanded: () => void;
}
const FiltersButton: React.FC<FiltersButtonProps> = ({
  toggleFiltersExpanded,
}) => {
  return (
    <TouchableOpacity onPress={toggleFiltersExpanded}>
      <SvgFilter
        height={24}
        width={24}
        opacity={0.7}
        color={colorPalette.darkText}
      />
    </TouchableOpacity>
  );
};

export default FiltersButton;
