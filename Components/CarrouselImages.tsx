import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const ProductImage = styled('img')({
  width: '100%',
  maxWidth: '600px', 
  height: '400px', 
  objectFit: 'cover',
  borderRadius: '8px',
});

const ThumbnailImage = styled('img')({
  width: '100px',
  height: '100px',
  objectFit: 'cover', 
  borderRadius: '150px',
  cursor: 'pointer',
  border: '2px solid #0205d',
  '&:hover': {
    border: '2px solid #0205d5', 
  },
});

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ width: '100%', mb: 2 }}>
        <ProductImage src={selectedImage} alt="Produit principal" />
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item key={index}>
            <IconButton onClick={() => handleThumbnailClick(image)}>
              <ThumbnailImage src={image} alt={`Miniature ${index + 1}`} />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductImageGallery;
