import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DocumentState } from './types/State';
import * as api from './api';

const initialState: DocumentState = {
  documents: [],
  documentsAll: [],
};

export const loadDocument = createAsyncThunk(
  'documents/loadDocument',
  async () => {
    const document1 = await api.loadDocument1();
    const document2 = await api.loadDocument2();
    return [document1, document2];
  }
);

export const loadDocuments = createAsyncThunk(
  'documents/loadDocument',
  async () => {
    const documents = await api.loadDocuments();
    return documents;
  }
);

export const deleteDocumentById = createAsyncThunk(
  'documents/deleteDocumentById',
  async (ids: number[]) => {
    await api.deleteDocumentById(ids);
    return ids;
  }
);

const documentsSlice = createSlice({
  name: 'document1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(loadDocument.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(loadDocument.fulfilled, (state, action) => {
      //   state.documents = action.payload;
      //   state.loading = false;
      // })
      // .addCase(loadDocument.rejected, (state, action) => {
      //   state.loadError = action.error.message;
      //   state.loading = false;
      // })
      .addCase(loadDocuments.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadDocuments.fulfilled, (state, action) => {
        state.documentsAll = action.payload;
        state.loading = false;
      })
      .addCase(loadDocuments.rejected, (state, action) => {
        state.loadError = action.error.message;
        state.loading = false;
      })
      .addCase(deleteDocumentById.fulfilled, (state, action) => {
        state.documentsAll = state.documentsAll.filter(
          (doc) => !action.payload.includes(doc.id)
        );
      })
      .addCase(deleteDocumentById.rejected, (state, action) => {
        state.loadError = action.error.message;
      });
  },
});

export default documentsSlice;
