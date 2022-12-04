import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../../../contexts/ProductContextProvider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EditProduct = ({ categories }) => {
  const { editProduct, getOneProduct, oneProduct } = useProduct();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category);
    }
  }, [oneProduct]);

  function updProduct() {
    let editedProduct = new FormData();
    editedProduct.append('title', title);
    editedProduct.append('description', description);
    editedProduct.append('price', price);
    editedProduct.append('category', category);
    if (image) {
      editedProduct.append('image', image);
    }
    editProduct(id, editedProduct, navigate);
  }

  return (
    <div className="add-product-wrapper">
      <TextField
        value={title}
        sx={{ width: 345, marginBottom: '30px' }}
        type="text"
        label="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        value={description}
        type="text"
        sx={{ width: 345, marginBottom: '30px' }}
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        value={price}
        sx={{ width: 345, marginBottom: '30px' }}
        type="text"
        label="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          sx={{ width: 345, marginBottom: '30px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.results?.map((item) => (
            <MenuItem key={item.slug} value={item.slug}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '10px',
          marginBottom: '30px',
        }}
      >
        <div>
          {oneProduct ? (
            <img src={oneProduct.image} alt="image" width="70" height="70" />
          ) : (
            <h5>No File</h5>
          )}
        </div>
        <div>
          <TextField
            value={image}
            sx={{ width: 345 }}
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
      </div>
      <button className="add-btn" onClick={updProduct}>
        Edit
      </button>
    </div>
  );
};

export default EditProduct;
