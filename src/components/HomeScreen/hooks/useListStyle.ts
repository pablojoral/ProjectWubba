import {useCallback, useState} from 'react';
import ListStyle from '../../../types/listStyle';

const useListStyle = () => {
  const [listStyle, setListStyle] = useState<ListStyle>('grid');

  const toggleListStyle = useCallback(() => {
    const newListStyle = listStyle === 'grid' ? 'list' : 'grid';
    setListStyle(newListStyle);
  }, [listStyle, setListStyle]);

  return {
    listStyle,
    toggleListStyle,
  };
};

export default useListStyle;
