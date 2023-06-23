import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Document2State } from './types/State';
import * as api from './api';

// 1. начальное состояние
const initialState: Document2State = {
  document2: {
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
export const loadDocument2 = createAsyncThunk(
  'documents/loadDocument2',
  async () => {
    const document2 = await api.loadDocument2();
    // то что возвращает thunk всегда попадает в action.payload
    return document2;
  }
);

// 3. Сам слайс с редьюсерами

const document2Slice = createSlice({
  name: 'document2',
  initialState,
  reducers: {},
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      // когда thunk loadSuggestions только запустился
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadDocument2.pending, (state, action) => {
        state.loading = true;
      })
      // когда thunk loadSuggestions завершиться удачей (fulfilled)
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadDocument2.fulfilled, (state, action) => {
        const document2 = action.payload;
        state.document2 = document2;
        state.loading = false;
      })
      // когда thunk loadSuggestions завершиться неудачей
      .addCase(loadDocument2.rejected, (state, action) => {
        // в action.error попадёт ошибка сгенерированная санком
        state.loadError = action.error.message;
        state.loading = false;
      });
  },
});

export default document2Slice.reducer;
