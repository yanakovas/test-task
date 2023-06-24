import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RootState, useAppDispatch } from '../../../store';
import { deleteDocumentById } from '../documentsSlice';

export default function Modal({ ids }: { ids: number[] }): JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const { documentsAll } = useSelector(
    (state: RootState) => state.documentsAll
  );

  useEffect(() => {
    console.log('ids', ids);
  }, [ids]);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const checkedDocuments =
    documentsAll?.filter((doc) => ids.includes(doc.id)) ?? [];

  const onPressApplyHandler = (): void => {
    dispatch(deleteDocumentById(ids));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Аннулировать
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Вы уверены, что хотите аннулировать товар(ы):
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {checkedDocuments.map((doc) => doc.name).join(',')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onPressApplyHandler} color="primary">
            Применить
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Отклонить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
