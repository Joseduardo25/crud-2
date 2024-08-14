import { NextResponse } from "next/server";
import JWT from "jsonwebtoken"
import clientPromise from "@/libs/mongoDB";


export const GET = async () => {
  const client = await clientPromise
  const db = client.db("marketplace-sell")
  const items = await db.collection("items").find({}).toArray()
  return NextResponse.json(items, {status: 200})
}

export const POST = async(req) =>{
  const client = await clientPromise
  const db = client.db("marketplace-sell")
  const {data} = await req.json()

  const items = await db.collection("items").find({}).toArray()
  return NextResponse.json(items, {status: 201})
}