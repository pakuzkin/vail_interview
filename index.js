const express = require('express')
const packageJson = require('./package.json');

const PORT = 30000

const app = express()

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
