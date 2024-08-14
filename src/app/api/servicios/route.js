import { NextResponse } from "next/server";
import JWT from "jsonwebtoken"
import clientPromise from "@/libs/mongoDB";


export const GET = async () => {
  const client = clientPromise
  return NextResponse.json({
    message: "success"
  })
}