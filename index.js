const express = require('express')
const app = express()
const PORT = 30000

app.get('/api/ping', (req, res) => {
    const msg = req.query.message
    const response = {
        "echo": msg,
        "timestamp": "TODO",
        "env": "TODO",
        "version": "TODO"
    }
    res.send(response)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
