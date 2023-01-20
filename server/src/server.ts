import Fastify from "fastify";

const app = Fastify()

app.get('/', () => {
  return "Habitracker"
})

app.listen({
  port: 3333
})