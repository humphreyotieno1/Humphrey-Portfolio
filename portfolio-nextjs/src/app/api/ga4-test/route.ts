import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'GA4 Configuration Test',
    trackingId: 'G-QDQEL9P44E',
    status: 'configured',
    timestamp: new Date().toISOString()
  })
}
