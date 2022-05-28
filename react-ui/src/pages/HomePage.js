import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Grid, Text } from 'theme-ui';
import Product from '../components/Product';

export default function HomePage({
  products,
  addItemToCart,
  removeItemFromCart,
  isSidebarOpen,
  shoppingCart,
}) {
  return (
    <>
      <Flex sx={{
        mb: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      >
        <Text as="h1" variant="link">Store</Text>
        <Link to="/order-history" style={{ color: 'royalblue' }}>
          <Text variant="link" color="primary">Order History</Text>
        </Link>
      </Flex>
      <Grid sx={{ gridTemplateColumns: isSidebarOpen ? ['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'] : ['1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr'] }}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            itemCount={shoppingCart[product.id] || 0}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </Grid>
    </>
  );
}
