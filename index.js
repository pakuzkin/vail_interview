const express = require('express')
const app = express()
const PORT = 30000

app.get('/api/ping', (req, res) => {
    const msg = req.query.message
    const env = process.env.NODE_ENV || 'development';
    const version = process.env.APP_VERSION || 'unknown';
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
