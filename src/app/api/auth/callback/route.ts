import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

interface RegisterResponseData {
  token: string
}

const COOKIE_ONE_MONTH_EXPIRATION = 60 * 60 * 60 * 24 * 30 // 1 month

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerResponse = await api.post<RegisterResponseData>('/register', {
    code,
  })

  const { token } = registerResponse?.data

  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${COOKIE_ONE_MONTH_EXPIRATION};`,
    },
  })
}
