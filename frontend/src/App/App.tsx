import { memo, useEffect } from 'react';
import { loadDocument1 } from '../features/documents/document1Slice';
import { loadDocument2 } from '../features/documents/document2Slice';
import Documents from '../features/documents/Main/Documents';
import { useAppDispatch } from '../store';

function App(): JSX.Element {
  // используем useAppDispatch из store
  const dispatch = useAppDispatch();

  useEffect(() => {
    // диспатчим экшен криэтор loadSuggestions, который был сгенерирован в слайсе
    dispatch(loadDocument1());
    dispatch(loadDocument2());
  }, [dispatch]);

  return (
    <div>
      <Documents />
    </div>
  );
}

export default memo(App);
