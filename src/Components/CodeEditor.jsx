'use client';
import React, { useRef, useState } from 'react';
import {Editor} from '@monaco-editor/react';
import { Box, Button, HStack } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '@/Constants';
import Output from './Output';
const CodeEditor = () => {
    const editorRef = useRef()
     const [value, setvalue] = useState('');
     const [language, setlanguage] = useState('javascript');
     const [output, setOutput] = useState(null);
     const [isError, setIsError] = useState(false);
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
     const handleReview = async () => {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
  
      try {
          const res = await fetch('http://localhost:8000', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ language, code: sourceCode }),
          });
  
          if (!res.ok) {
              const errorData = await res.json();
              setOutput([errorData.error || 'Something went wrong!']);
              setIsError(true);
              return;
          }
  
          const data = await res.json();
          setOutput(data.result); // Use 'result' key from the response
          setIsError(false);
      } catch (err) {
          setOutput(['Something went wrong!']);
          setIsError(true);
      }
  };
  
  return (
    <Box>
      <HStack spacing={4}>
         <Box w='50%'>
         {/* <LanguageSelector language={language} onSelect={onSelect}/> */}
         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Button
              colorScheme="blue"
              variant="outline"
              fontWeight="bold"
              color="blue.400"
              onClick={handleReview}
            >
              Start Review
            </Button>
          </Box>
         <Editor height="78vh" theme='vs-dark' language={language} defaultValue="// some comment" 
         value={value} 
         onMount={onMount}
         onChange={(value)=>setvalue(value)}/>
         </Box>
         
         <Output editorRef={editorRef} language={language} output={output} isError={isError}/>
         
         
      </HStack>
      
    </Box>
  )
}

export default CodeEditor
