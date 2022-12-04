import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AddProduct.css';
import { useProduct } from '../../../contexts/ProductContextProvider';

const AddProduct = () => {
  const { categories, getCategories, addProduct } = useProduct();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  function createProduct() {
    let newProduct = new FormData();
    newProduct.append('title', title);
    newProduct.append('description', description);
    newProduct.append('price', price);
    newProduct.append('category', category);
    newProduct.append('image', image);
    addProduct(newProduct, navigate);
  }

  return (
    <div className="add-product-wrapper">
      <TextField
        sx={{ width: 345, marginBottom: '30px' }}
        type="text"
        label="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        type="text"
        sx={{ width: 345, marginBottom: '30px' }}
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
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
          onChange={handleChange}
        >
          {categories.results?.map((item) => (
            <MenuItem key={item.title} value={item.slug}>
              {item.slug}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        value={image}
        sx={{ width: 345, marginBottom: '30px' }}
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button className="add-btn" onClick={createProduct}>
        Add
      </button>
    </div>
  );
};

export default AddProduct;
