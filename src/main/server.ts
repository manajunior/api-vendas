import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
