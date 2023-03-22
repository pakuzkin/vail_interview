const express = require('express')
const app = express()
const PORT = 30000

app.get('/api/ping', (req, res) => {
    res.send('pong!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
