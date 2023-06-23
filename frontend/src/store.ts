import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import document1Slice from './features/documents/document1Slice';
import document2Slice from './features/documents/document2Slice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    document1: document1Slice,
    document2: document2Slice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
