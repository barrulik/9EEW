const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('9EEW is now hosted on repl.it !'));

app.listen(port, () => console.log(`9EEW is listening to http://localhost:${port}`));