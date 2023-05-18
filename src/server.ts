import fastify from 'fastify'
import { memoriesRoutes } from './routes/momories'

const app = fastify()

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on port http://localhost:3333 ')
  })
