import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Document1State } from './types/State';
import * as api from './api';

// 1. начальное состояние
const initialState: Document1State = {
  document1: {
    id: 0,
    name: '',
    quantity: 0,
    deliveryDate: '',
    price: 0,
    currency: '',
  },
};

// 2. асинхронные операции - санки

// loadSuggestions - это actionCreator
export const loadDocument1 = createAsyncThunk(
  'documents/loadDocument1',
  async () => {
    const document1 = await api.loadDocument1();
    // то что возвращает thunk всегда попадает в action.payload
    return document1;
  }
);

// 3. Сам слайс с редьюсерами

const document1Slice = createSlice({
  name: 'document1',
  initialState,
  reducers: {},
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      // когда thunk loadSuggestions только запустился
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadDocument1.pending, (state, action) => {
        state.loading = true;
      })
      // когда thunk loadSuggestions завершиться удачей (fulfilled)
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadDocument1.fulfilled, (state, action) => {
        const document1 = action.payload;
        state.document1 = document1;
        state.loading = false;
      })
      // когда thunk loadSuggestions завершиться неудачей
      .addCase(loadDocument1.rejected, (state, action) => {
        // в action.error попадёт ошибка сгенерированная санком
        state.loadError = action.error.message;
        state.loading = false;
      });
  },
});

export default document1Slice.reducer;
