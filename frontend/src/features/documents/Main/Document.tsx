import React, { memo, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import TDocument from '../types/Document';
import Modal from '../Modal/Modal';

type DocumentsProps = {
  documents: TDocument[];
};

function Document({ documents }: DocumentsProps): JSX.Element {
  const [modal, setModal] = useState(false);

  const allQuantity = documents.reduce(
    (accumulator, document) => accumulator + document.quantity,
    0
  );

  const rows: GridRowsProp = [
    {
      id: 0,
      name: documents[0].name,
      quantity: documents[0].quantity,
      deliveryDate: documents[0].deliveryDate,
      price: documents[0].price,
      currency: documents[0].currency,
    },
    {
      id: 1,
      name: documents[1].name,
      quantity: documents[1].quantity,
      deliveryDate: documents[1].deliveryDate,
      price: documents[1].price,
      currency: documents[1].currency,
    },
    {
      id: 3,
      name: 'total',
      quantity: allQuantity,
    },
  ];

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    { field: 'deliveryDate', headerName: 'DeliveryDate', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'currency', headerName: 'Currency', width: 150 },
  ];

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <div>
        <Modal />
      </div>
    </div>
  );
}

export default memo(Document);
