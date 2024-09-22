import { Dispatch, SetStateAction } from 'react';

export interface SearchState {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
