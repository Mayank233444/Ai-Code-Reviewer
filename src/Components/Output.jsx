// import { useState } from "react";
// import { Box, Button, Text, useToast } from "@chakra-ui/react";


// const Output = ({ editorRef, language }) => {
  
//   const [output, setOutput] = useState(null);
 
//   const [isError, setIsError] = useState(false);

//   const runCode = async () => {
//     const sourceCode = editorRef.current.getValue();
//     if (!sourceCode) return;
    
//   };

//   return (
//     <Box w="50%">
//       <Text mb={0} mt={10} fontSize="lg" color='white'>
//         Review : 
//       </Text>
      
//       <Box
//         h="78vh"
//         mt={4}
//         p={2}
//         color={isError ? "red.400" : ""}
//         border="1px solid"
//         borderRadius={4}
//         borderColor={isError ? "red.500" : "#333"}
//         bgColor='#1E1E1E'
//       >
//         {output
//           ? output.map((line, i) => <Text key={i}>{line}</Text>)
//           : 'Your Code Review Will appear here'}
//       </Box>
//     </Box>
//   );
// };
// export default Output;

import { Box, Text } from "@chakra-ui/react";

const Output = ({ output, isError }) => {
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
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Your Code Review Will appear here'}
      </Box>
    </Box>
  );
};

export default Output;
