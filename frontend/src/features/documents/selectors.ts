// в этом файле мы указываем функции, которые достают данные из стэйта

import { RootState } from '../../store';
import TDocument from './types/Document';

export const selectDocument1 = (state: RootState): TDocument =>
  state.document1.document1;

export const selectDocument2 = (state: RootState): TDocument =>
  state.document2.document2;
