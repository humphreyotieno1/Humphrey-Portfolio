import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({
      message: 'API route is working!',
      timestamp: new Date().toISOString(),
      method: 'POST'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Test API error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'API route is working!',
    timestamp: new Date().toISOString(),
    method: 'GET'
  })
}
