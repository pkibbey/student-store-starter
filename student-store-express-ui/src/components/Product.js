import React from 'react';
import {
  Box, Button, Grid, Image, Text,
} from 'theme-ui';
import { Link } from 'react-router-dom';
import { MdAdd, MdRemove } from 'react-icons/md';

export default function Product({ product, addItemToCart, removeItemFromCart }) {
  const addToCart = () => addItemToCart(product.id);
  const removeFromCart = () => removeItemFromCart(product.id);

  return (
    <Grid
      sx={{
        borderRadius: 3,
        gridTemplateRows: '1fr auto',
        gap: 2,
      }}
    >
      <Link to={`/product/${product.id}`} style={{ display: 'grid' }}>
        <Box sx={{
          backgroundColor: '#333',
          display: 'block',
          padding: '10px',
          '&:hover': {
            boxShadow: '0 0 5px rgba(255,255,255,0.5)',
          },
        }}
        >
          <Image src={product.image} sx={{ borderRadius: 3 }} />
        </Box>
      </Link>
      <Grid sx={{
        gridTemplateColumns: '1fr auto',
      }}
      >
        <Box
          sx={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 0,
          }}
        >
          {product.name}
        </Box>
        <Text variant="price">{`$${product.price.toFixed(2)}`}</Text>
      </Grid>
      <Grid sx={{ gridTemplateColumns: '1fr 1fr' }}>
        <Button variant="small" onClick={addToCart}><MdAdd size={12} /></Button>
        <Button variant="smallSecondary" onClick={removeFromCart}><MdRemove size={12} /></Button>
      </Grid>
    </Grid>
  );
}
