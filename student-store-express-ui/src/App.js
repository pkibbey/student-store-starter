import React, { useState, useEffect } from 'react';
import {
  Box, Grid,
} from 'theme-ui';
import axios from 'axios';
import {
  Routes, Route, useParams, Link,
} from 'react-router-dom';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import ProductDetail from './components/ProductDetail';

function ProductPage({ products }) {
  const params = useParams();
  const productIdAsInt = parseInt(params.productId, 10);
  const product = products.find((p) => p.id === productIdAsInt);

  if (!products.length) { return null; }

  return (
    <>
      <Link to="/" style={{ color: 'royalblue' }}><Box as="h1" mb={3} color="royalblue">Back</Box></Link>
      <ProductDetail key={product?.id} product={product} />
    </>
  );
}

function Content({ products }) {
  return (
    <>
      <Box as="h1" mb={4}>Store</Box>
      <Grid sx={{ gridTemplateColumns: ['1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr'] }}>
        {products.map((product) => <Product key={product.id} product={product} />)}
      </Grid>
    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3001/store');
      setProducts(result.data.products);
    }
    fetchData();
  }, []);

  return (
    <Grid sx={{
      gridTemplateAreas: "'sidebar content'",
      gridTemplateColumns: 'auto 1fr',
      gap: 0,
      overflow: 'hidden',
    }}
    >
      <Sidebar />
      <Box p={3} sx={{ overflow: 'auto' }}>
        <Routes>
          <Route
            path="product/:productId"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/"
            element={<Content products={products} />}
          />
        </Routes>
      </Box>
    </Grid>
  );
}

export default App;
