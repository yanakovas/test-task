// Этот файл отвечает за общение клиента с сервером (фечи)

import TDocument from './types/Document';

export async function loadDocument1(): Promise<TDocument> {
  const response = await fetch('/api/documents/document1');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

export async function loadDocument2(): Promise<TDocument> {
  const response = await fetch('/api/documents/document2');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}
