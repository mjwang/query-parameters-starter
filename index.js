const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// Import plant routes
const plantRoutes = require('./routes/plantRoutes')

app.get('/', (req, res) => {
    res.send('🌱 Plant Care 🌱')
})

// Use the plantRoutes for the /plants path
app.use('/plants', plantRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
