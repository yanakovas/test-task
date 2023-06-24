import { memo } from 'react';
import { useSelector } from 'react-redux';
import Document from './Document';
import { RootState } from '../../../store';

function Documents(): JSX.Element {
  // const { documents } = useSelector((state: RootState) => state.documentState);
  const { documentsAll } = useSelector(
    (state: RootState) => state.documentsAll
  );

  return (
    <div>
      <h1>Таблица</h1>
      <div>
        {documentsAll.length > 0 && <Document documentsAll={documentsAll} />}
      </div>
    </div>
  );
}

export default memo(Documents);
