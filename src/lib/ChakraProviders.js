'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});

export function ChakraProviders({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
