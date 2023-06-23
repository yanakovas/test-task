import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectDocument1, selectDocument2 } from '../selectors';
import Document from './Document';

function Documents(): JSX.Element {
  const document1 = useSelector(selectDocument1);
  const document2 = useSelector(selectDocument2);

  const documents = [document1, document2];
  documents.sort((a, b) => Number(a.deliveryDate) - Number(b.deliveryDate));

  return (
    <div>
      <h1>Таблица</h1>
      <div>
        <Document documents={documents} />
      </div>
    </div>
  );
}

export default memo(Documents);
