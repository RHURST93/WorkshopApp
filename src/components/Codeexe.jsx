import React, { useState } from 'react';
import axios from 'axios';

const CodeExecution = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const executeCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/execute', { code });
      setOutput(response.data.result); // Update state with the result from the response
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <div>
      <textarea rows={10} value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your code here..." />
      <button onClick={executeCode}>Run Code</button>
      <div>
        {/* Display the output */}
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeExecution;
