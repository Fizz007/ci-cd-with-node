

const express = require('express')

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello from the Faisal' })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})