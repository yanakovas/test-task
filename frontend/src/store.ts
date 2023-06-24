import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import documentsSlice from './features/documents/documentsSlice';

const store = configureStore({
  reducer: {
    documentState: documentsSlice.reducer,
    documentsAll: documentsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
