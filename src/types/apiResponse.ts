import {Character} from './character';

export interface RickAndMortyPaginatedAPIResponse<T> {
  info: PageInfo;
  results: T[];
  error: string;
}

export type RickAndMortyMultipeObjectAPIResponse<T> = T[] | T;

interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
