import { Dispatch, SetStateAction } from 'react';

export interface InputSelectedState {
  isInputSelected: boolean;
  setIsInputSelected: Dispatch<SetStateAction<boolean>>;
}
