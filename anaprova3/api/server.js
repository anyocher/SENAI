const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./src/routes');  


app.use(express.json()); 
app.use(cors());  


app.use('/api', routes);  

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API ToDo List respondendo em http://localhost:${PORT}`);
});
