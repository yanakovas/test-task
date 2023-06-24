import TDocument from './Document';

export type DocumentState = {
  documents: TDocument[];
  documentsAll: TDocument[];
  loadError?: string;
  loading?: boolean;
};
