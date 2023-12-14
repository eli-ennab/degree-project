import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')
  const message = searchParams.get('message')

  try {
    if (!username || !message) throw new Error('Username and Message required')
    await sql`INSERT INTO Guestbook (Username, Message) VALUES (${username}, ${message});`
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  const pets = await sql`SELECT * FROM Guestbook;`
  return NextResponse.json({ pets }, { status: 200 })
}
