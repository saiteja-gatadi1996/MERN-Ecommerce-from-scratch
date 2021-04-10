import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

//everything in the productRoutes has to start with below tagline url
app.use('/api/products', productRoutes)

//for wrong routes,we display the message with originalUrl
app.use(notFound)

//for by ID routes
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
