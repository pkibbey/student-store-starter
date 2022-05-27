import React from 'react';
import { Box, Grid, Image } from 'theme-ui';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
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
        <Box sx={{ fontSize: 0, color: 'yellow', fontWeight: 'bold' }}>{`$${product.price.toFixed(2)}`}</Box>
      </Grid>
    </Grid>
  );
}
