import React from 'react';
import { Box } from 'theme-ui';
import { MdArrowForward } from 'react-icons/md';

export default function Sidebar() {
  return (
    <Box p={3} sx={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
      <MdArrowForward color="white" size={20} />
    </Box>
  );
}
