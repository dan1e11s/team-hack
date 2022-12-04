import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useProduct } from '../../contexts/ProductContextProvider';

const FormDialog = ({ open, handleClose, oneProduct }) => {
  const { createComment } = useProduct();

  const [review, setReview] = useState('');

  const { id } = useParams();

  function addComment() {
    let newComment = new FormData();
    newComment.append('text', review);
    newComment.append('product', id);
    createComment(id, newComment);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Написать отзыв</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Поделитесь своими впечатлениями о товаре!
        </DialogContentText>
        <TextField
          onChange={(e) => setReview(e.target.value)}
          autoFocus
          margin="dense"
          id="name"
          label="Ваш отзыв"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            addComment();
            handleClose();
          }}
        >
          Отправить
        </Button>
        <Button onClick={handleClose}>Отмена</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
