import { memo, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import TDocument from '../types/Document';
import Modal from '../Modal/Modal';

type DocumentsProps = {
  documentsAll: TDocument[];
};

function Document({ documentsAll }: DocumentsProps): JSX.Element {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  const allQuantity = documentsAll.reduce(
    (accumulator, document) => accumulator + document.quantity,
    0
  );

  const rows: GridRowsProp = documentsAll.map((document) => {
    console.log(document);
    return {
      id: document.id,
      name: document.name,
      quantity: document.quantity,
      deliveryDate: document.deliveryDate,
      price: document.price,
      currency: document.currency,
    };
  });

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
        checkboxSelection
        onRowSelectionModelChange={(
          newRowSelectionModel: GridRowSelectionModel
        ) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <div>
        <p>Total quantity: {allQuantity}</p>
      </div>
      <div>
        <Modal ids={rowSelectionModel as number[]} />
      </div>
    </div>
  );
}

export default memo(Document);
