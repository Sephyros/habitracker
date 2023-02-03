import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from "./lib/routes";

const app = Fastify({ logger: true })

app.register(cors, {
  origin: [
    'http://192.168.0.149:19000', // Mobile
    'http://localhost:5173' // Web
  ]
})
app.register(appRoutes)
app.listen({
  port: 3333,
  host: '0.0.0.0'
}, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`Server listening on ${address}`)
})

// app.listen({
//   port: 3333,
//   host: '0.0.0.0'
// }).then(
//   () => {
//     console.log(`Server Running on port 3333`)
//   }
// )