const express = require('express');
const routes = require('./src/communications/routes');
const { setUpRoutes } = require('./src/communications/index');

const app = express();
const PORT = 3030;

setUpRoutes(app);

app.use(express.json);

app.listen(PORT, () => {
  console.log(`Server running in port ${ PORT }.`);
});