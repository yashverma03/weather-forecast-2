import { Dispatch, SetStateAction } from 'react';

export interface IsInputSelectedState {
  isInputSelected: boolean;
  setIsInputSelected: Dispatch<SetStateAction<boolean>>;
}
