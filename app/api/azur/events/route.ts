import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function GET() {
  try {
    const client = await MongoClient.connect(process.env.DB_URL!)
    const db = client.db("azurlane")
    const events = await db.collection("events").find({}).toArray()

    await client.close()

    return NextResponse.json(events)
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    )
  }
}
