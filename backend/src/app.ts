import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(cookieParser())

// routes
const url = '/api/v1'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
