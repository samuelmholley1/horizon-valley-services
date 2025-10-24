import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Log for debugging
    console.log('Quote submission received:', formData)
    
    // Here's where you'll integrate:
    // 1. Send email to customer (confirmation)
    // 2. Send email to owners@horizonvalleycleaning.com (notification)
    // 3. Add to Google Sheets
    
    // For now, we'll use a basic email service
    // You'll need to set up environment variables for your email service
    
    // Simulate success (replace with actual email/sheets integration)
    const timestamp = new Date().toISOString()
    
    // TODO: Add actual integrations here
    // - Resend/SendGrid for emails
    // - Google Sheets API for data storage
    
    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      timestamp 
    })
    
  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote request' },
      { status: 500 }
    )
  }
}
