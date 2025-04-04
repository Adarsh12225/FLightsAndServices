const express = require('express');
const { PORT } = require('./config/serverConfig'); // Load .env variables

const setupAndStartServer = () => {
    const app = express();
    
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
        
    });
};

setupAndStartServer();
