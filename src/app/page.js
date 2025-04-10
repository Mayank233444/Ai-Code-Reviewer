'use client';

import React from 'react'
import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from '@/Components/CodeEditor';
import ReviewSidebar from '@/Components/ReviewSidebar';
import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';

const page = () => {
  return (
    <>
      <Navbar />
      <Box pt="70px"> {/* Add padding top to account for fixed navbar */}
        <HeroSection />
        <Flex minH="100vh" bg="gray.900">
          <ReviewSidebar />
          <Box flex='1' p={8} minH="100vh" bg='#0F1629' color='gray.500' px={6} py={8}>
            <CodeEditor />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default page;
