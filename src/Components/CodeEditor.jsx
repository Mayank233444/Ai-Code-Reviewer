'use client';
import React, { useRef, useState } from 'react';
import {Editor} from '@monaco-editor/react';
import { Box, HStack } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '@/Constants';
import Output from './Output';
const CodeEditor = () => {
    const editorRef = useRef()
     const [value, setvalue] = useState('');
     const [language, setlanguage] = useState('javascript');
     const onMount = (editor)=>{
        editorRef.current=editor;
        editor.focus();
     }
     const onSelect = (language)=>{
        setlanguage(language);
        setvalue(
            CODE_SNIPPETS[language]
        )
     }
  return (
    <Box>
      <HStack spacing={4}>
         <Box w='50%'>
         <LanguageSelector language={language} onSelect={onSelect}/>
         <Editor height="78vh" theme='vs-dark' language={language} defaultValue="// some comment" 
         value={value} 
         onMount={onMount}
         onChange={(value)=>setvalue(value)}/>
         </Box>
         
         <Output editorRef={editorRef} language={language}/>
         
         
      </HStack>
      
    </Box>
  )
}

export default CodeEditor
