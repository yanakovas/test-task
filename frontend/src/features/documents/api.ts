import TDocument from './types/Document';

export async function loadDocuments(): Promise<TDocument[]> {
  const response = await fetch('/api/documents');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

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

export async function deleteDocumentById(ids: number[]): Promise<void> {
  const response = await fetch(`/api/documents/delete`, {
    method: 'DELETE',
    body: JSON.stringify(ids),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}
