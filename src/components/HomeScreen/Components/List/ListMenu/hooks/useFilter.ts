import {useCallback, useEffect, useState} from 'react';

export const useFilter = <T>(
  query: T | undefined,
  handleChangeQuery: (query: T) => void,
  delay: number = 1000,
) => {
  let timeout: NodeJS.Timeout | null = null;

  const [debouncedQuery, setDebouncedQuery] = useState<T | undefined>(query);

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handleChange: (query: T) => void = useCallback(
    (query: T) => {
      setDebouncedQuery(query);

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        handleChangeQuery(query);
      }, delay);
    },
    [setDebouncedQuery, handleChangeQuery],
  );

  return {debouncedQuery, handleChange};
};
