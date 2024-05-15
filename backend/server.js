const express = require('express');
const { VM } = require('vm2');

const app = express();
const port = 5000;

app.use(express.json());

app.post('/execute', (req, res) => {
  const { code } = req.body;

  const vm = new VM({
    timeout: 1000, // Set a timeout to prevent infinite loops
  });

  try {
    const result = vm.run(code);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
