import { Box, Text } from "@chakra-ui/react";

const Output = ({ output, isError }) => {
  const renderOutput = () => {
    if (!output) {
      return 'Your Code Review Will appear here';
    }

    if (Array.isArray(output)) {
      return output.map((line, i) => <Text key={i}>{line}</Text>);
    }

    // If output is a string or any other type, render it directly
    return <Text>{output}</Text>;
  };

  return (
    <Box w="50%">
      <Text mb={0} mt={10} fontSize="lg" color="white">
        Review:
      </Text>
      <Box
        h="78vh"
        mt={4}
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        bgColor="#1E1E1E"
      >
        {renderOutput()}
      </Box>
    </Box>
  );
};

export default Output;