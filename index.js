const express = require('express')
const packageJson = require('./package.json');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Replace with your Swagger definition file


const PORT = 30000

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/ping', (req, res) => {
    const msg = req.query.message
    const env = process.env.NODE_ENV || 'development';
    const version = packageJson.version || 'unknown';
    const response = {
        "echo": msg,
        "timestamp": Date.now(),
        "env": env,
        "version": version,
    }
    res.send(response)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
