'use client';

import {
  Box,
  VStack,
  Button,
  Icon,
  Collapse,
  Flex,
  Text,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import {
  WarningIcon,
  InfoIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useState } from 'react';

const ReviewSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <Box
      h="100vh"
      bg="gray.800"
      color="white"
      transition="width 0.3s ease"
      width={isCollapsed ? '60px' : '250px'}
      p={2}
    >
      <Flex justify="flex-end" mb={4}>
        <IconButton
          size="sm"
          icon={isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          bg="gray.300"
          _hover={{ bg: 'gray.100' }}
        />
      </Flex>

      
      <VStack align="stretch" spacing={8} px={isCollapsed ? 2 : 4} mt={70} width="100%">
  {[
    {
      label: 'Potential Issues',
      icon: <WarningIcon />,
      color: 'yellow',
    },
    {
      label: 'Bug Prevention',
      icon: <InfoIcon />,
      color: 'blue',
    },
    {
      label: 'Optimizations',
      icon: <CheckCircleIcon />,
      color: 'green',
    },
  ].map((item, idx) => (
    <Tooltip
      key={idx}
      label={isCollapsed ? item.label : ''}
      placement="right"
      hasArrow
      openDelay={300}
    >
      <Button
        leftIcon={item.icon}
        colorScheme={item.color}
        variant="solid"
        justifyContent={isCollapsed ? 'center' : 'flex-start'}
        px={isCollapsed ? 0 : 4}
        py={6}
        height="48px"
        borderRadius="lg"
        boxShadow="md"
        _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
        transition="all 0.2s"
      >
        <Collapse in={!isCollapsed} animateOpacity>
          {item.label}
        </Collapse>
      </Button>
    </Tooltip>
  ))}
</VStack>
    </Box>
  );
};

export default ReviewSidebar;
