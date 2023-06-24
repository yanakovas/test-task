import { memo, useEffect } from 'react';
import {
  loadDocument,
  loadDocuments,
} from '../features/documents/documentsSlice';
import Documents from '../features/documents/Main/Documents';
import { useAppDispatch } from '../store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadDocuments());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(loadDocument());
  // }, [dispatch]);

  return (
    <div>
      <Documents />
    </div>
  );
}

export default memo(App);
