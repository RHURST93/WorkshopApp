import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as Babel from '@babel/standalone';

const MonacoEditor = () => {
  const editorRef = useRef(null);
  const outputRef = useRef(null);
  const [code, setCode] = useState('');

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const saveToFile = () => {
    if (editorRef.current) {
      try {
        const content = editorRef.current.getValue();
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'code.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error saving file:', error);
      }
    } else {
      console.error('Editor is not initialized');
    }
  };

  const compileAndRun = () => {
    if (editorRef.current) {
      try {
        const inputCode = editorRef.current.getValue();
        const scriptStartIndex = inputCode.indexOf('<script>');
        const scriptEndIndex = inputCode.indexOf('</script>');

        let jsCode = '';
        if (scriptStartIndex !== -1 && scriptEndIndex !== -1) {
          jsCode = inputCode.substring(scriptStartIndex + 8, scriptEndIndex);
        }

        const compiledJsCode = Babel.transform(jsCode, { presets: ['env'], sourceType: 'script', comments: false }).code;
        const combinedCode = inputCode.replace(jsCode, compiledJsCode);

        if (outputRef.current) {
          const outputDoc = outputRef.current.contentDocument || outputRef.current.contentWindow.document;
          outputDoc.open();
          outputDoc.write(combinedCode);
          outputDoc.close();
        }
      } catch (error) {
        console.error('Error compiling code:', error);
      }
    }
  };

  useEffect(() => {
    const savedCode = localStorage.getItem('savedCode') || `<!DOCTYPE html>
<html>
<head>
  <title>HTML Preview</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <script>
    console.log('Hello, world!');
  </script>
</body>
</html>`;

    setCode(savedCode);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Editor
        height="100vh"
        width= "50%"
        ref={editorRef}
        defaultLanguage="html"
        value={code}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          automaticLayout: true,
          wordWrap: 'on',
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          tabSize: 4,
          insertSpaces: true,
        }}
      />

      <iframe
        ref={outputRef}
        title="Output"
        style={{ flex: 1, height: '100%', border: '1px solid #ccc', marginLeft: '10px' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        <button className='rounded bg-dark text-white px-2 py-2 mb-2' onClick={saveToFile}>Save</button>
        <button className='rounded bg-dark text-white px-2 py-2' onClick={compileAndRun}>Run</button>
      </div>
    </div>
  );
};

export default MonacoEditor;
