import express from "express"
import { prisma } from "./lib/prisma.ts"

const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, ()=>{
console.log("API rodante")

})

