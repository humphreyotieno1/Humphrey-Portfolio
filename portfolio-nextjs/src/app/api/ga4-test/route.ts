import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'GA4 Configuration Test',
    trackingId: 'G-TBS6R279WG',
    status: 'configured',
    timestamp: new Date().toISOString()
  })
}
