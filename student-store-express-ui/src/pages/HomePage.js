import React from 'react';
import { Box, Grid } from 'theme-ui';
import Product from '../components/Product';

export default function HomePage({
  products,
  addItemToCart,
  removeItemFromCart,
  isSidebarOpen,
}) {
  return (
    <>
      <Box as="h1" mb={4}>Store</Box>
      <Grid sx={{ gridTemplateColumns: isSidebarOpen ? ['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'] : ['1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr'] }}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </Grid>
    </>
  );
}
