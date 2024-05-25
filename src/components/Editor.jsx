import React, { useRef, useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution';

const MonacoEditor = () => {
  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    const savedCode = localStorage.getItem('savedCode');

    // Initialize Monaco Editor
    const editor = monaco.editor.create(editorRef.current, {
      value: savedCode || '', // Use saved code if available
      language: 'html',
      theme: 'vs-dark',
      automaticLayout: true,
      wordWrap: 'on',
      minimap: {
        enabled: false,
      },
    });

    // Set initial HTML code if saved code is not available
    if (!savedCode) {
      editor.setValue(`<!DOCTYPE html>
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
</body>
</html>`);
    }

    // Event listener for code changes in the editor
    const subscription = editor.onDidChangeModelContent(() => {
      const newCode = editor.getValue();
      setCode(newCode);

      // Update preview content
      if (previewRef.current) {
        previewRef.current.srcdoc = newCode;
        // Save the code to local storage
        localStorage.setItem('savedCode', newCode);
      }
    });
    // Register an HTML completion provider for auto-closing tags
    monaco.languages.registerCompletionItemProvider('html', {
      provideCompletionItems: (model, position) => {
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        });

        const match = textUntilPosition.match(/<([a-zA-Z0-9-]+)(\s[^>]*)?>$/);
        if (!match) {
          return { suggestions: [] };
        }

        const tag = match[1];
        return {
          suggestions: [
            {
              label: `</${tag}>`,
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: `</${tag}>`,
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              },
            },
          ],
        };
      },
    });

    return () => {
      subscription.dispose();
      editor.dispose();
    };
  }, []);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* HTML Editor */}
      <div ref={editorRef} style={{ flex: 1, height: '400px' }} />

      {/* Preview */}
      <iframe
        ref={previewRef}
        title="Preview"
        style={{ flex: 1, height: '400px', border: '1px solid #ccc', marginLeft: '10px' }}
      />
    </div>
  );
};

export default MonacoEditor;