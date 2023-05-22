import { configureAxe } from 'jest-axe'

export const axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
})

export * from '@testing-library/react'
