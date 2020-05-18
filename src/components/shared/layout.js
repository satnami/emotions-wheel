import React from 'react';
import PropTypes from 'prop-types';
import Nav from '@components/shared/nav';
import Footer from '@components/shared/footer';
import { Flex, Box } from '@chakra-ui/core';

const Layout = ({ children }) => (
  <Flex h='100%' direction='column'>
    <Nav />
    <Box as='main' flex='1 0 auto'>
      {children}
    </Box>
    <Footer />
  </Flex>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
