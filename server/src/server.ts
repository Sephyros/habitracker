import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const app = Fastify()
const prisma = new PrismaClient

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany()
  return habits
})

app.listen({
  port: 3333
}).then(
  () => {
    console.log(`Server Running on port 3333`)
  }
)