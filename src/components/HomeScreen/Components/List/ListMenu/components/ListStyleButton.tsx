import React from 'react';
import {TouchableOpacity} from 'react-native';
import ListStyle from '../../../../../../types/listStyle';
import SvgGrid from '../../../../../../../assets/icons/Grid';
import SvgList from '../../../../../../../assets/icons/List';
import colorPalette from '../../../../../../styles/colors';

interface ListStyleButtonProps {
  listStyle: ListStyle;
  toggleListStyle: () => void;
}

const ListStyleButton: React.FC<ListStyleButtonProps> = ({
  listStyle,
  toggleListStyle,
}) => {
  const isGrid: boolean = listStyle === 'grid';

  return (
    <TouchableOpacity onPress={toggleListStyle}>
      {isGrid ? (
        <SvgGrid
          height={24}
          width={24}
          opacity={0.7}
          color={colorPalette.darkText}
        />
      ) : (
        <SvgList
          height={24}
          width={24}
          opacity={0.7}
          color={colorPalette.darkText}
        />
      )}
    </TouchableOpacity>
  );
};

export default ListStyleButton;
