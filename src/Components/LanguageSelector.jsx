import { LANGUAGE_VERSIONS } from '@/Constants';
import { Button, Menu, Portal,Box,MenuItem,Text,MenuButton,MenuList } from "@chakra-ui/react";
import React from 'react';
// import { LuChevronBottom } from "react-icons/lu"
const LanguageSelector = ({language,onSelect}) => {
    const languages = Object.entries(LANGUAGE_VERSIONS);
    const ACTIVE_COLOR = "blue.400";
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      
    <Box ml={2} mb={4}>
        

        <Text mb={2} fontSize='lg' color='white' >Language:</Text>
        <Menu isLazy>
  <MenuButton as={Button} >
    {language}
  </MenuButton>
  <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
           </MenuList>
           </Menu>
           
    </Box>
    {/* <Button colorScheme='blue' variant='outline'  fontWeight="bold" color="blue.400" >
    Start Review
  </Button> */}
    </Box>
  )
}

export default LanguageSelector


