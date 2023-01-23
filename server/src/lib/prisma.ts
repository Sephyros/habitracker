import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient(
  // { log: ['query'] } // Obter log no servidor a cada query
)
