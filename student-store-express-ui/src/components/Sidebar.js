import React, { useState } from 'react';
import {
  Box, Button, Flex, Grid, Text,
} from 'theme-ui';
import { MdArrowBack, MdArrowForward, MdShoppingCart } from 'react-icons/md';
import { findProductById } from '../utils';

function CartItem({
  count, product, addItemToCart, removeItemFromCart,
}) {
  const addToCart = () => addItemToCart(product.id);
  const removeFromCart = () => removeItemFromCart(product.id);
  const totalCost = (count * product.price).toFixed(2);

  return (
    <Grid sx={{
      gridTemplateColumns: '1fr auto auto auto auto',
      gap: 2,
      mb: 2,
      alignItems: 'center',
    }}
    >
      <Text
        sx={{
          fontSize: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}
      >
        {product.name}
      </Text>
      <Text sx={{ fontSize: 0 }}>{`x ${count}`}</Text>
      <Text variant="price">{`($${totalCost})`}</Text>
      <Button variant="small" onClick={addToCart}>Add</Button>
      <Button variant="smallSecondary" onClick={removeFromCart}>Remove</Button>
    </Grid>
  );
}

export default function Sidebar({
  products, shoppingCart, addItemToCart, removeItemFromCart,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const totalItemsInCart = Object.values(shoppingCart).reduce((prev, item) => prev + item, 0);

  const totalCost = Object.entries(shoppingCart).reduce((prev, item) => {
    const foundProduct = findProductById(products, item[0]);
    const priceOfItem = foundProduct.price * item[1];
    return prev + priceOfItem;
  }, 0);

  const ArrowIcon = isSidebarOpen ? MdArrowBack : MdArrowForward;

  function handleToggle() {
    setIsSidebarOpen((currentState) => !currentState);
  }

  return (
    <Flex
      sx={{
        p: 3,
        transition: 'width 0.3s ease',
        borderRight: '1px solid rgba(255,255,255,0.1)',
        width: isSidebarOpen ? 360 : 52,
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <ArrowIcon color="white" size={20} onClick={() => handleToggle()} />
      <Box sx={{ position: 'relative', mt: 3 }}>
        <MdShoppingCart />
        {!!totalItemsInCart && (
          <Grid sx={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            backgroundColor: 'yellow',
            borderRadius: 10,
            color: '#333',
            fontSize: '10px',
            lineHeight: '12px',
            minWidth: 14,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1px',
          }}
          >
            {`${totalItemsInCart}`}
          </Grid>
        )}
      </Box>
      {isSidebarOpen && (
        <>
          <Box sx={{
            mt: 4,
            width: '100%',
          }}
          >
            {Object.entries(shoppingCart).map((item) => (
              <CartItem
                key={item[0]}
                count={item[1]}
                product={findProductById(products, item[0])}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </Box>
          <Flex sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          >
            <Text sx={{ fontSize: 2 }}>Total</Text>
            <Text variant="price" sx={{ fontSize: 2 }}>{`$${totalCost.toFixed(2)}`}</Text>
          </Flex>
        </>
      )}
    </Flex>
  );
}
