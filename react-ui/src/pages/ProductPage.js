import React from 'react';
import { Box, Button, Grid } from 'theme-ui';
import { useParams, Link } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { findProductById } from '../utils';

export default function ProductPage({
  products, shoppingCart, addItemToCart, removeItemFromCart,
}) {
  const params = useParams();
  const product = findProductById(products, params.productId);

  if (!product) { return null; }

  const addToCart = () => addItemToCart(product.id);
  const removeFromCart = () => removeItemFromCart(product.id);

  const itemCount = shoppingCart[product.id];

  return (
    <>
      <Grid sx={{ gridTemplateColumns: 'auto 1fr', mb: 3, gap: 2 }}>
        <Link to="/" style={{ color: 'royalblue' }}>
          <Box as="h1" color="primary">Store</Box>
        </Link>
        <Box as="h1">{`/ ${product.name}`}</Box>
      </Grid>
      <ProductDetail key={product?.id} product={product} />
      <Button onClick={addToCart} mr={3}>Add an item</Button>
      {!!itemCount && <Button variant="secondary" onClick={removeFromCart}>Remove an item</Button>}
      {!!itemCount && <Box mt={3}>{`${itemCount} item${itemCount > 1 ? 's' : ''} in the shopping cart`}</Box>}
    </>
  );
}
