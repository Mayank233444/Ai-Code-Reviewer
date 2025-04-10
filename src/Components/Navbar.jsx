'use client';

import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Icon,
  Container,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      as="header"
      w="100%"
      bg="#0B0F1A"
      color="white"
      position="fixed"
      top={0}
      zIndex={1000}
      borderBottom="1px"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl">
        <Flex align="center" h="70px" justify="space-between">
          <HStack spacing={2}>
            <Icon as={FaCode} w={6} h={6} color="#805AD5" />
            <Text fontWeight="bold" fontSize="xl">
              CodeVisionAI
            </Text>
          </HStack>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <Button variant="ghost" color="gray.300" _hover={{ color: "white" }}>
              Features
            </Button>
            <Button variant="ghost" color="gray.300" _hover={{ color: "white" }}>
              Demo
            </Button>
            <Button variant="ghost" color="gray.300" _hover={{ color: "white" }}>
              Testimonials
            </Button>
            <Button variant="ghost" color="gray.300" _hover={{ color: "white" }}>
              Pricing
            </Button>
          </HStack>

          <HStack spacing={4}>
            <Button variant="ghost" color="gray.300" _hover={{ color: "white" }}>
              Sign In
            </Button>
            <Button
              bg="#805AD5"
              _hover={{ bg: "#6B46C1" }}
              color="white"
              size="md"
              px={6}
              rounded="md"
            >
              Get Started
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
