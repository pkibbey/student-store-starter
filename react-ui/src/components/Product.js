import React from 'react';
import {
  Box, Button, Grid, Image, Text,
} from 'theme-ui';
import { Link } from 'react-router-dom';

export default function Product({
  product, itemCount, addItemToCart, removeItemFromCart,
}) {
  const addToCart = () => addItemToCart(product.id);
  const removeFromCart = () => removeItemFromCart(product.id);

  return (
    <Grid
      sx={{
        gridTemplateRows: '1fr auto',
        gap: 2,
      }}
    >
      <Link to={`/product/${product.id}`} style={{ display: 'grid' }}>
        <Box sx={{
          backgroundColor: '#333',
          borderRadius: 3,
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
        gap: 1,
        gridTemplateColumns: itemCount ? '1fr auto auto' : '1fr auto',
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
        {!!itemCount && (
          <Box
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              fontSize: 0,
            }}
          >
            {`x ${itemCount}`}
          </Box>
        )}
      </Grid>
      <Grid sx={{ gridTemplateColumns: '1fr 1fr' }}>
        <Button variant="small" onClick={addToCart}>Add</Button>
        {!!itemCount && <Button variant="smallSecondary" onClick={removeFromCart}>Remove</Button>}
      </Grid>
    </Grid>
  );
}
