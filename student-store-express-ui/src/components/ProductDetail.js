import React from 'react';
import { Box, Image } from 'theme-ui';

export default function ProductDetail({ product }) {
  return (
    <Box>
      <Box as="h2" sx={{ fontSize: 3, mb: 3 }}>{product.name}</Box>
      <Box as="h3" sx={{ fontSize: 2, mb: 3 }}>{`Category: ${product.category}`}</Box>
      <Box as="h3" sx={{ fontSize: 2, mb: 3 }}>{`Price: $${product.price}`}</Box>
      <Image src={product.image} sx={{ borderRadius: 3 }} />
    </Box>
  );
}
