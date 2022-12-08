import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '',
  1: '',
  1.5: '',
  2: '',
  2.5: '',
  3: '',
  3.5: '',
  4: '',
  4.5: '',
  5: '',
};

export default function Ratings({ oneProduct }) {
  const value = oneProduct.views_count;

  return (
    <Box
      sx={{
        width: '100%',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
