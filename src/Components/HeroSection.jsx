'use client';

import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    Badge,
    Container,
  } from "@chakra-ui/react";
  import React from "react";
  
  const HeroSection = () => {
    return (
      <Box
        position="relative"
        overflow="hidden"
        py={{ base: 20, md: 28 }}
        px={8}
        bg="#0B0F1A"
        color="white"
        textAlign="center"
        minH="100vh"
        display="flex"
        alignItems="center"
      >
        {/* Multiple Star Layers for Parallax Effect */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          overflow="hidden"
        >
          {/* First star layer - small stars */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="200%"
            height="200%"
            opacity={1}
            style={{
              backgroundImage: "radial-gradient(1.5px 1.5px at 40px 40px, rgba(255,255,255,1), rgba(255,255,255,0))",
              backgroundSize: "50px 50px",
              animation: "driftTopLeft 20s linear infinite",
            }}
          />
          {/* Second star layer - medium stars */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="200%"
            height="200%"
            opacity={0.8}
            style={{
              backgroundImage: "radial-gradient(2px 2px at 65px 65px, rgba(255,255,255,1), rgba(255,255,255,0))",
              backgroundSize: "120px 120px",
              animation: "driftBottomRight 25s linear infinite",
            }}
          />
          {/* Third star layer - large stars */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="200%"
            height="200%"
            opacity={0.7}
            style={{
              backgroundImage: "radial-gradient(2.5px 2.5px at 90px 90px, rgba(255,255,255,1), rgba(255,255,255,0))",
              backgroundSize: "200px 200px",
              animation: "driftTopRight 30s linear infinite",
            }}
          />
        </Box>
  
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack spacing={6} maxW="4xl" mx="auto">
            <Badge
              colorScheme="purple"
              fontSize="sm"
              px={4}
              py={1}
              borderRadius="full"
              bg="whiteAlpha.100"
            >
              The Future of Code Review is Here
            </Badge>
            <Heading
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="extrabold"
              lineHeight="1.2"
              bgGradient="linear(to-r, #8B5CF6, #3B82F6, #06B6D4)"
              bgClip="text"
            >
              Elevate Your Code with{" "}
              <Text as="span" display="block">
                AI-Powered Insights
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="3xl" px={4}>
              Get instant, intelligent code reviews that enhance quality, identify
              bugs, and suggest optimizations before they reach production.
            </Text>
  
            <HStack spacing={4} pt={6}>
              <Button
                size="lg"
                bg="#805AD5"
                _hover={{ bg: "#6B46C1" }}
                px={8}
                h="56px"
                fontSize="md"
              >
                Start Free Trial →
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.300"
                color="white"
                _hover={{ bg: "whiteAlpha.100" }}
                h="56px"
                px={8}
                fontSize="md"
              >
                View Demo
              </Button>
            </HStack>
  
            <HStack
              spacing={{ base: 4, md: 8 }}
              pt={12}
              flexWrap="wrap"
              justify="center"
              color="gray.400"
              fontSize="sm"
            >
              <Text display="flex" alignItems="center" gap={2}>
                <Box as="span" color="#06B6D4">✓</Box> Zero configuration
              </Text>
              <Text display="flex" alignItems="center" gap={2}>
                <Box as="span" color="#06B6D4">✓</Box> Works with any language
              </Text>
              <Text display="flex" alignItems="center" gap={2}>
                <Box as="span" color="#06B6D4">✓</Box> GitHub & GitLab integration
              </Text>
            </HStack>
          </VStack>
        </Container>
  
        {/* Updated Star animation keyframes */}
        <style jsx global>{`
          @keyframes driftTopLeft {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-25%, -25%) scale(1.05);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }

          @keyframes driftBottomRight {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-25%, 25%) scale(1.1);
            }
            100% {
              transform: translate(-50%, 50%) scale(1);
            }
          }

          @keyframes driftTopRight {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(25%, -25%) scale(1.15);
            }
            100% {
              transform: translate(50%, -50%) scale(1);
            }
          }
        `}</style>
      </Box>
    );
  };
  
  export default HeroSection;
  